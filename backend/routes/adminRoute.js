import express from 'express'
import upload from '../middlewares/multer.js'
import { addLawyer, adminDashboard, allLawyers, appointmentCancel, appointmentsAdmin, loginAdmin } from '../controllers/adminController.js'
import authAdmin from '../middlewares/authAdmin.js'
import { changeAvailability } from '../controllers/lawyerController.js'


const adminRouter=express.Router()

adminRouter.post('/add-lawyer',authAdmin, upload.single('image'), addLawyer)
adminRouter.post('/login', loginAdmin)
adminRouter.post('/all-lawyers',authAdmin , allLawyers)
adminRouter.post('/change-availability',authAdmin , changeAvailability)
adminRouter.get('/appointments',authAdmin, appointmentsAdmin )
adminRouter.post('/cancel-appointment', authAdmin, appointmentCancel)
adminRouter.get('/dashboard', authAdmin, adminDashboard)

export default adminRouter


