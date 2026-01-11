import axios from "axios";
import { createContext, useState } from "react";
import { toast } from "react-toastify";

export const AdminContext = createContext();

const AdminContextProvider = (props) => {

    const [aToken, setAToken] = useState(localStorage.getItem('aToken')? localStorage.getItem('aToken'):'')
    const backendUrl = "https://juris-meet.onrender.com"
    const [lawyers, setLawyers] = useState([])
    const [appointments, setAppointments] = useState([])
    const [dashData, setDashData]=useState(false)
    

    const getAllLawyers = async () => {
        try {
            const { data } = await axios.post(backendUrl + '/api/admin/all-lawyers' , {}, { headers: { aToken } })
            if (data.success) {
                setLawyers(data.lawyers)
                console.log(data.lawyers)
            } else {
                toast.error(data.message)
                // console.log(data.message)
            }
        } catch (error) {
            console.log(error.message)
            
        }
    }


    const changeAvailability = async (lawId) => {  
      try {
        const { data } = await axios.post(backendUrl + '/api/admin/change-availability', { lawId }, { headers: { aToken } })
        if(data.success) {
          toast.success(data.message)
          getAllLawyers()
        }
        else {
          toast.error(data.message)
        }
      } catch (error) {
       toast.error(error.message) 
      }
    
    }
    const getAllAppointments= async(req, res)=>{
        try {
            const {data}=await axios.get(backendUrl + '/api/admin/appointments', { headers: { aToken } })
            if(data.success){
                setAppointments(data.appointments)
            }
            else{
                toast.error(data.message)
            }
        } catch (error) {
            console.log(error.message)
            toast.error(error.message)
        }
    }
    
    const cancelAppointment=async(appointmentId)=>{
        try {
            const {data}=await axios.post(backendUrl+'/api/admin/cancel-appointment', {appointmentId}, {headers:{aToken}})
            if(data.success){
              toast.success(data.message)
              getAllAppointments()
            }        
            else{
                toast.error(data.message)
            }
        } catch (error) {
             console.log(error.message)
            toast.error(error.message)
        }
    }


    const getDashData=async()=>{
        try {
           const {data}=await axios.get(backendUrl+'/api/admin/dashboard', {headers:{aToken}})
           if(data.success){
            setDashData(data.dashData)
            toast.success(data.message)
            console.log(data.dashData)
           } 
           else{
            toast.error(data.message)
           }
        } catch (error) {
            console.log(error.message)
            toast.error(error.message)
        }
    }

    const value = {
        aToken, setAToken,
        backendUrl, lawyers,
        getAllLawyers,changeAvailability,
        getAllAppointments, appointments,setAppointments,
        cancelAppointment,
        dashData, getDashData,
        
    }

    return (
        <AdminContext.Provider value={value}>
            {props.children}
        </AdminContext.Provider>
    )
}


export default AdminContextProvider
