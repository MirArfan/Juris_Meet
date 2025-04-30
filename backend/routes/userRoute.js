import express from 'express'
import { bookAppointment, cancelAppointment, getProfile, handleCancel, handleFail, handleIPN, handleSuccess, listAppointment, loginUser, paymentBkash, paymentRazorpay, registerUser, updateProfile, verifyPayment } from '../controllers/userController.js'
import authUser from '../middlewares/authUser.js'
import upload from '../middlewares/multer.js'





const userRouter = express.Router()


userRouter.post('/register', registerUser)
userRouter.post('/login', loginUser)

userRouter.get('/get-profile', authUser, getProfile)
userRouter.post('/update-profile', upload.single('image'), authUser, updateProfile)
userRouter.post('/book-appointment', authUser, bookAppointment)
userRouter.get('/appointments', authUser, listAppointment)
userRouter.post('/cancel-appointment', authUser, cancelAppointment)
userRouter.post('/payment-razorpay', authUser,paymentRazorpay)
userRouter.post('/verifyRazorpay', authUser, verifyPayment)


//
userRouter.post('/payment-bkash', authUser, paymentBkash)
userRouter.post('/payment/success/:tranId', handleSuccess);
userRouter.post('/payment/fail/:tranId', handleFail);
userRouter.post('/payment/cancel/:tranId', handleCancel);
userRouter.post('/ipn', handleIPN);




export default userRouter

