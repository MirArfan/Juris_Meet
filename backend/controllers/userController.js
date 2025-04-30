
import validator from 'validator'
import bcrypt from 'bcrypt'
import userModel from '../models/userModel.js'
import jwt from 'jsonwebtoken'
import { v2 as cloudinary } from 'cloudinary'
import lawyerModel from '../models/lawyerModel.js'
import appointmentModel from '../models/appointmentModel.js'
import razorpay from 'razorpay'
import SSLCommerzPayment from 'sslcommerz-lts'

// API to register user

const registerUser = async (req, res) => {

    try {
        const { name, email, password } = req.body

        if (!name || !email || !password) {
            return res.json({ success: false, message: "Please fill all fields" })
        }

        if (!validator.isEmail(email)) {
            return res.json({ success: false, message: "Invalid Email" })
        }
        if (password.length < 8) {
            return res.json({ success: false, message: "Password should be at least 8 characters" })
        }

        // hash password
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        const userData = {
            name,
            email,
            password: hashedPassword
        }

        const newUser = new userModel(userData)
        const user = await newUser.save()

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '30d' })
        res.json({ success: true, message: "User Registered", token })


    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })

    }
}

// api for user login
const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body


        const user = await userModel.findOne({ email })

        if (!user) {
            return res.json({ success: false, message: "User not found" })
        }

        const isMatch = await bcrypt.compare(password, user.password)

        if (!isMatch) {
            return res.json({ success: false, message: "Invalid credentials" })
        }

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET)
        res.json({ success: true, message: "User Logged In", token })

    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}


// api to get user profile data
const getProfile = async (req, res) => {
    try {
        const { userId } = req.body
        const userData = await userModel.findById(userId).select('-password')
        res.json({ success: true, message: "User Profile Data", userData })


    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })

    }
}


//  // api to update user profile data
const updateProfile = async (req, res) => {
    try {
        const { userId, name, phone, address, dob, gender } = req.body
        const imageFile = req.file

        if (!name || !phone || !dob || !gender) {
            return res.json({ success: false, message: "Please fill all fields" })
        }
        await userModel.findByIdAndUpdate(userId, { name, phone, address: JSON.parse(address), dob, gender })
        if (imageFile) {
            const imageUpload = await cloudinary.uploader.upload(imageFile.path, {
                resource_type: "image",
            })
            const imageUrl = imageUpload.secure_url
            await userModel.findByIdAndUpdate(userId, { image: imageUrl })

        }
        res.json({ success: true, message: "Profile updated successfully" })


    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}


// API to book appointment

const bookAppointment = async (req, res) => {
    try {

        const { userId, lawId, slotDate, slotTime } = req.body;

        const lawData = await lawyerModel.findById(lawId).select('-password')
        if (!lawData.available) {
            return res.json({ success: false, message: "Lawyer is not available" })
        }
        const slots_booked = lawData.slots_booked

        // cheacking for slot availability

        if (slots_booked[slotDate]) {
            if (slots_booked[slotDate].includes(slotTime)) {
                return res.json({ success: false, message: "Slot already booked" })
            } else {
                slots_booked[slotDate].push(slotTime)
            }
        } else {
            slots_booked[slotDate] = []
            slots_booked[slotDate].push(slotTime)
        }

        const userData = await userModel.findById(userId).select('-password')
        delete lawData.slots_booked


        const appointmentData = new appointmentModel({
            userId,
            lawId,
            userData,
            lawData,
            amount: lawData.fees,
            slotDate,
            slotTime,
            date: Date.now()
        });

        const newAppointment = new appointmentModel(appointmentData)
        await newAppointment.save();

        // save new slots data in lawData
        await lawyerModel.findByIdAndUpdate(lawId, { slots_booked })
        res.json({ success: true, message: "Appointment booked successfully", appointment: newAppointment });

    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}


// API to list user appointments for frontend my-appointments page
const listAppointment = async (req, res) => {
    try {
        const { userId } = req.body
        const appointments = await appointmentModel.find({ userId })
        res.json({ success: true, message: "User appointments", appointments })

    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}

// API to cancel appointment
const cancelAppointment = async (req, res) => {
    try {
        const { userId, appointmentId } = req.body

        const appointmentData = await appointmentModel.findById(appointmentId)
        if (appointmentData.userId !== userId) {
            return res.json({ success: false, message: "You are not authorized to cancel this appointment" })
        }
        await appointmentModel.findByIdAndUpdate(appointmentId, { cancelled: true })


        // releasing lawyer slots
        const { lawId, slotDate, slotTime } = appointmentData
        const lawyerData = await lawyerModel.findById(lawId)
        let slots_booked = lawyerData.slots_booked
        slots_booked[slotDate] = slots_booked[slotDate].filter((e) => e !== slotTime)
        await lawyerModel.findByIdAndUpdate(lawId, { slots_booked })
        res.json({ success: true, message: "Appointment cancelled successfully" })
    }
    catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}






// API to make payment of appointment using sslcommerz


const store_id = process.env.STORE_ID;
const store_passwd = process.env.STORE_PASS;
const is_live = false



// API to make payment of appointment using bkash




const paymentBkash = async (req, res) => {
    const { appointmentId } = req.body;
   
    try {
        const appointmentData = await appointmentModel.findById(appointmentId);
        if (!appointmentData) return res.status(404).json({ success: false, message: 'Appointment not found' });

        if (appointmentData.payment) {
            return res.status(400).json({ success: false, message: 'Appointment already paid' });
        }


        const tran_id = appointmentId;


        const data = {
            total_amount: appointmentData.amount,
            currency: "BDT",
            tran_id: tran_id, // use unique tran_id for each api call
            success_url: `http://localhost:4000/api/user/payment/success/${tran_id}`,
            fail_url: `http://localhost:4000/api/user/payment/fail/${tran_id}`,
            cancel_url: 'http://localhost:5173/cancel',
            ipn_url: 'http://localhost:5173/ipn',
            shipping_method: 'Courier',
            product_name: 'Computer.',
            product_category: 'Electronic',
            product_profile: 'general',
            cus_name: 'Customer Name',
            cus_email: 'customer@example.com',
            cus_add1: 'Dhaka',
            cus_add2: 'Dhaka',
            cus_city: 'Dhaka',
            cus_state: 'Dhaka',
            cus_postcode: '1000',
            cus_country: 'Bangladesh',
            cus_phone: '01711111111',
            cus_fax: '01711111111',
            ship_name: 'Customer Name',
            ship_add1: 'Dhaka',
            ship_add2: 'Dhaka',
            ship_city: 'Dhaka',
            ship_state: 'Dhaka',
            ship_postcode: 1000,
            ship_country: 'Bangladesh',
        };
        // console.log(data)

        const sslcz = new SSLCommerzPayment(process.env.STORE_ID, process.env.STORE_PASS, false);

        sslcz.init(data).then(apiResponse => {
            let GatewayPageURL = apiResponse.GatewayPageURL;
            if (GatewayPageURL) {
                res.json({ success: true, url: GatewayPageURL });
                console.log("Redirecting to:", GatewayPageURL);
            } else {
                console.error("Empty GatewayPageURL", apiResponse);
                res.status(500).json({ success: false, message: 'Payment gateway URL missing' });
            }
        });

    } catch (error) {
        console.error(error.message);
        res.status(500).json({ success: false, message: 'Server error' });
    }
};
const handleSuccess= async (req, res) => {
    const { tranId } = req.params;
    // console.log("Payment Success:", req.body);
    // console.log(`train id = ${tranId}`);

    try {
        await appointmentModel.findByIdAndUpdate(tranId, {
            payment: true,
        });
        res.redirect(`http://localhost:5173/payment-success/${req.params.tranId}`);
    } catch (error) {
        console.error("Payment success handler error:", error.message);
        res.redirect('http://localhost:5173/payment-error');
    }
};





// Fail handler
const handleFail = (req, res) => {
    res.redirect(`http://localhost:5173/payment-failed/${req.params.tranId}`);
};

// Cancel handler
const handleCancel = (req, res) => {
    res.redirect(`http://localhost:5173/payment-failed/${req.params.tranId}`);
};

// IPN (Instant Payment Notification) handler
const handleIPN = (req, res) => {
    console.log("IPN Notification Received:", req.body);
    res.sendStatus(200); // Always respond with 200 to avoid retries
};






const razorpayInstance = new razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET

})
// API to make payment of appointment using razorpay
const paymentRazorpay = async (req, res) => {

    try {
        const { appointmentId } = req.body
        const appointmentData = await appointmentModel.findById(appointmentId)
        if (!appointmentData || appointmentData.cancelled) {
            return res.json({ success: false, message: "Appointment Cancelled or Invalid appointment" })
        }
        // creating options for razopay payment
        const options = {
            amount: appointmentData.amount * 100, // amount in paise
            currency: process.env.CURRENCY,
            receipt: appointmentId,
        }
        // creation of an order
        const order = await razorpayInstance.orders.create(options)
        res.json({ success: true, message: "Order created successfully", order })
    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}

// API to verify payment of rozorpay
const verifyPayment = async (req, res) => {
    try {
        const { razorpay_order_id } = req.body
        const orderInfo = await razorpayInstance.orders.fetch(razorpay_order_id)
        if (orderInfo.status === "paid") {
            await appointmentModel.findByIdAndUpdate(orderInfo.receipt, { payment: "true" })
            res.json({ success: true, message: "Payment verified successfully" })
        }
        else {
            res.json({ success: false, message: "Payment not verified" })
        }
    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}

export { registerUser, loginUser, getProfile, updateProfile, bookAppointment, listAppointment, cancelAppointment, paymentRazorpay, verifyPayment, paymentBkash, handleSuccess, handleFail, handleCancel, handleIPN }



