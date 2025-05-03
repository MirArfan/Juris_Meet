import express from 'express'
import { appointmentCancel, appointmentComplete, appointmentLawyer, lawyerDashboard, lawyerList, lawyerProfile, loginLawyer, updateLawyerProfile } from '../controllers/lawyerController.js'
import authLawyer from '../middlewares/authLawyer.js'

const lawyerRouter=express.Router()
lawyerRouter.get('/list', lawyerList)
lawyerRouter.post('/login', loginLawyer)
lawyerRouter.get('/appointments', authLawyer,appointmentLawyer)
lawyerRouter.post('/complete-appointment', authLawyer, appointmentComplete)
lawyerRouter.post('/cancel-appointment', authLawyer, appointmentCancel)
lawyerRouter.get('/dashboard', authLawyer, lawyerDashboard)
lawyerRouter.get('/profile', authLawyer, lawyerProfile)
lawyerRouter.post('/update-profile', authLawyer, updateLawyerProfile)


export default lawyerRouter


