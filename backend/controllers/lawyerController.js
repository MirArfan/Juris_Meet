import lawyerModel from "../models/lawyerModel.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

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
export { changeAvailability, lawyerList, loginLawyer }