import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';



const MyAppointments = () => {

  const {backendUrl, token, getLawyersData}=useContext(AppContext);
 
  const [appointments, setAppointments] = useState([]);
  const months=['','Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  const navigate=useNavigate()



  const slotDateFormat=(slotDate)=>{
   const dateArray=slotDate.split('_')
   return dateArray[0]+' '+months[Number(dateArray[1])]+' '+dateArray[2]
  }

  const getUserAppointments = async () => {
    try {
      const {data}=await axios.get(backendUrl+'/api/user/appointments', {headers:{token}})
      if(data.success){
        setAppointments(data.appointments.reverse())
        console.log(data.appointments)
      }
    } catch (error) {
      console.log(error.message)
      toast.error(error.message)
    }
  }

  const cancelAppointment = async (appointmentId) => {
    try {
      // console.log(appointmentId)
      const {data}=await axios.post(backendUrl+'/api/user/cancel-appointment', {appointmentId}, {headers:{token}})
      if(data.success){
        toast.success(data.message)
        getUserAppointments()
        getLawyersData()
      }
      else{
        toast.error(data.message)
      }
    } catch (error) {
      console.log(error.message)
      toast.error(error.message)
    }
  }


  

  
  const appointmentBkash = async (appointmentId) => {
    console.log(appointmentId)

     try {
      const {data}=await axios.post(backendUrl+'/api/user/payment-bkash', {appointmentId}, {headers:{token}})
      if(data.success){
        console.log(data)
        window.location.replace(data.url);  // Redirect to payment gateway
      }
     } catch (error) {
      console.log(error.message)
      toast.error(error.message)
     }
  }

  

  useEffect(()=>{
   if(token){
    getUserAppointments()
   }
  }, [token])

  return (
    <div>
      <p className='pb-3 mt-12 font-medium text-zinc-700 border-b'>My Appointments</p>
      <div >
        {appointments.map((item, index)=>(
          <div className='grid grid-cols-[1fr_2fr] gap-4 sm:flex sm:gap-6 py-2 border-b' key={index}>
            <div>
              <img className='w-32 bg-indigo-50' src={item.lawData.image} alt="" />
            </div>
            <div className='flex-1 text-sm text-zinc-600'>
              <p className='text-neutral-800 font-semibold'>{item.lawData.name}</p>
              <p>{item.speciality}</p>
              <p className='text-zinc-700 font-medium mt-1'>Address:</p>
              <p className='text-sm'>{item.lawData.address.line1}</p>
              <p className='text-sm'>{item.lawData.address.line2}</p>
              <p className='text-xs mt-1'><span className='text-sm text-neutral-700 font-medium'>Date & Time:</span> {slotDateFormat(item.slotDate)} | {item.slotTime}</p>
            </div>
            <div></div>
            <div className='flex flex-col gap-2 justify-center'>
            {!item.cancelled && item.payment && !item.isCompleted && <button className='sm:min-w-48 py-2 border rounded text-stone-500 bg-indigo-50'>Paid</button> }
            {!item.cancelled && !item.payment && !item.isCompleted && <button onClick={()=>appointmentBkash(item._id)} className='text-sm text-stone-500 text-center sm:min-w-48 py-2 border rounded hover:bg-primary hover:text-white transition-all duration-300'>Pay Online</button>} 
            {!item.cancelled && !item.isCompleted && <button onClick={()=>cancelAppointment(item._id)} className='text-sm text-stone-500 text-center sm:min-w-48 py-2 border rounded hover:bg-red-600 hover:text-white transition-all duration-300'>Cancel Appintment</button>} 
            {item.cancelled && !item.isCompleted && <button className='sm:min-w-48 py-2 border border-red-500 rounded text-red-500'> Appointment cancelled</button> }
            {item.isCompleted && <button className='sm:min-w-48 py-2 border border-green-500 text-green-500'>Completed</button> }
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MyAppointments
