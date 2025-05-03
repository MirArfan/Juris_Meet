import lawyerModel from "../models/lawyerModel.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import appointmentModel from "../models/appointmentModel.js"

const changeAvailability = async (req, res) => {
    try {
        const { lawId } = req.body
        const lawData = await lawyerModel.findById(lawId)
        await lawyerModel.findByIdAndUpdate(lawId, {available: !lawData.available})
        res.json({ success: true, message: "Lawyer Availability Changed"})
    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}

const lawyerList =async(req, res)=>{
    try {
        const lawyers=await lawyerModel.find({}).select(['-password', '-email'])    
         res.json({success:true, lawyers}) 
    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })    
    }
}

const loginLawyer=async(req, res)=>{
    try {
        const {email, password} = req.body
        const lawyer=await lawyerModel.findOne({email})
        if(!lawyer){
            return res.json({success:false, message:"Lawyer not found"})
        }
        const isMatch=await bcrypt.compare(password, lawyer.password)
        if(isMatch){
            const token=jwt.sign({id:lawyer._id}, process.env.JWT_SECRET)
            res.json({success:true, message:"Login Success", token})
        } else {
            res.json({success:false, message:"Invalid password"})
        }
    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })    
        
    }
}

// API to get lawyer appointment for lawyer panel
const appointmentLawyer=async(req, res)=>{
    try {
        const {lawId} = req.body
        const appointments=await appointmentModel.find({lawId})
        res.json({success:true, appointments})
    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })    
        
    }
}


// API to mark appointment completed for lawyer panel
const appointmentComplete=async(req, res)=>{
    try {
        const {lawId , appointmentId}=req.body
        const appointmentData=await appointmentModel.findById(appointmentId)
        if(appointmentData && appointmentData.lawId===lawId){
            await appointmentModel.findByIdAndUpdate(appointmentId, {isCompleted:true})
            return res.json({success:true, message: 'Appointment Completed'})
        }
        else{
            return res.json({success: false, message: "Mark Failed"})
        }
    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })    
       
    }
}

// API to mark appointment completed for lawyer panel
const appointmentCancel=async(req, res)=>{
    try {
        const {lawId , appointmentId}=req.body
        const appointmentData=await appointmentModel.findById(appointmentId)
        if(appointmentData && appointmentData.lawId===lawId){
            await appointmentModel.findByIdAndUpdate(appointmentId, {cancelled:true})
            return res.json({success:true, message: 'Appointment Cancelled'})
        }
        else{
            return res.json({success: false, message: "Cancellation Failed"})
        }
    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })    
       
    }
}


// API to get dashboard data for lawyer panel
const lawyerDashboard=async(req, res)=>{
    try {
        const {lawId}=req.body
        const appointments=await appointmentModel.find({lawId})
        let earnings=0;
        appointments.map((item)=>{
            if(item.isCompleted || item.payment){
                earnings+=item.amount
            }
        })
        let clients=[]
        appointments.map((item)=>{
            if(!clients.includes(item.userId)){
                clients.push(item.userId)
            }
        })
        const dashData={
            earnings,
            appointments: appointments.length,
            clients: clients.length,
            latestAppointments:appointments.reverse().slice(0,5)
        }
        res.json({success: true, dashData})


    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })    
      
    }
}
export { changeAvailability, lawyerList, loginLawyer, appointmentLawyer, appointmentCancel, appointmentComplete, lawyerDashboard }