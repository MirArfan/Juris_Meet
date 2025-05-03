import axios from "axios";
import { createContext, useState } from "react";
import { toast } from "react-toastify";

export const LawyerContext = createContext();

const LawyerContextProvider = (props) => {

    const backendUrl = import.meta.env.VITE_BACKEND_URL
    
    const [lToken, setLToken] = useState(localStorage.getItem('lToken') ? localStorage.getItem('lToken') : '')
    const [appointments, setAppointments] = useState([])
    const [dashData, setDashData]=useState(false)
    const [profileData, setProfileData]=useState(false)

    const getAppointments = async () => {
        try {

            const { data } = await axios.get(backendUrl + '/api/lawyer/appointments', { headers: { lToken } })
            if (data.success) {
                setAppointments(data.appointments)
                console.log(data.appointments)

            } else {
                toast.error(data.message)
                console.log(data.message)
            }
        } catch (error) {
            toast.error(error.message)
            console.log(error)

        }
    }

    const completeAppointment = async (appointmentId) => {
        try {
            const { data } = await axios.post(backendUrl + '/api/lawyer/complete-appointment', { appointmentId }, { headers: { lToken } })
            if (data.success) {
                toast.success(data.message)
                getAppointments()
            }
            else {
                toast.error(data.error)
            }
        } catch (error) {
            toast.error(error.message)
            console.log(error)

        }
    }


    const cancelAppointment = async (appointmentId) => {
        try {
            const { data } = await axios.post(backendUrl + '/api/lawyer/cancel-appointment', { appointmentId }, { headers: { lToken } })
            if (data.success) {
                toast.success(data.message)
                getAppointments()
            }
            else {
                toast.error(data.error)
            }
        } catch (error) {
            toast.error(error.message)
            console.log(error)

        }
    }
    const getDashData=async()=>{
        try {
            const {data}=await axios.get(backendUrl+'/api/lawyer/dashboard',{headers:{lToken}})
            if(data.success){
                setDashData(data.dashData)
                console.log(data.dashData)
            }
            else{
                toast.error(data.message)
            }
        } catch (error) {
            toast.error(error.message)
            console.log(error)

        }
    }

    const getProfileData=async()=>{
        try {
            const {data}=await axios.get(backendUrl+'/api/lawyer/profile', {headers:{lToken}})
            if(data.success){
                setProfileData(data.profileData)
                console.log(data)
            }
        } catch (error) {
            toast.error(error.message)
            console.log(error)

        }
    }

    const value = {
        lToken, setLToken,
        backendUrl,
        getAppointments, appointments, setAppointments,
        completeAppointment, cancelAppointment,
        getDashData, dashData, setDashData,
        profileData, setProfileData, getProfileData,
    }

    return (
        <LawyerContext.Provider value={value}>
            {props.children}
        </LawyerContext.Provider>
    )
}


export default LawyerContextProvider