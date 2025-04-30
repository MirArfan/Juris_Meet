import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext';
import { assets } from '../assets/assets';
import RelatedLawyers from '../components/RelatedLawyers';
import { toast } from 'react-toastify';
import axios from 'axios';

const Appointment = () => {

  const { lawId } = useParams();
  const { lawyers, currencySymbol, backendUrl, token, getLawyersData } = useContext(AppContext);

  const daysOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

  const navigate = useNavigate()

  const [lawInfo, setLawInfo] = useState(null);
  const [lawSlots, setLawSlots] = useState([]);
  const [slotIndex, setSlotIndex] = useState(0);
  const [slotTime, setSlotTime] = useState('');



  const fetchLawInfo = async () => {
    const lawInfo = lawyers.find(law => law._id === lawId)
    setLawInfo(lawInfo);

  }

  const getAvailableSlots = async () => {
    if (!lawInfo || !lawInfo.slots_booked) return; 
    setLawSlots([]); /// clear previous data

    // getting current date
    let today = new Date();


    for (let i = 0; i < 7; i++) {
      // getting date with index
      let currentDate = new Date(today);
      currentDate.setDate(today.getDate() + i)


      // setting end time of the date with index
      let endTime = new Date();
      endTime.setDate(today.getDate() + i)
      endTime.setHours(21, 0, 0, 0);


      //setting hours
      if (today.getDate() === currentDate.getDate()) {
        currentDate.setHours(currentDate.getHours() > 10 ? currentDate.getHours() + 1 : 10)
        currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0)
      }
      else {
        currentDate.setHours(10);
        currentDate.setMinutes(0);
      }
      let timeSlots = []

      while (currentDate < endTime) {
        let formattedTime = currentDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })



        let day = currentDate.getDate();
        let month = currentDate.getMonth() + 1; // Months are zero-based
        let year = currentDate.getFullYear();

        const slotDate = day + "_" + month + "_" + year;
        const slotTime = formattedTime

        const isSlotAvailable = lawInfo.slots_booked[slotDate] && lawInfo.slots_booked[slotDate].includes(slotTime) ? false : true;

        /// add slot to array
        if (isSlotAvailable) {
          timeSlots.push({
            datatime: new Date(currentDate),
            time: formattedTime
          })
        }

        


        // increment current time by 30 minutes
        currentDate.setMinutes(currentDate.getMinutes() + 30)
      }
      setLawSlots(prev => ([...prev, timeSlots]))
    }
  }

  const bookAppointment = async () => {
    if (!token) {
      toast.warn("Login to book appointment")
      return navigate('/login')
    }

    try {
      const date = lawSlots[slotIndex][0].datatime

      let day = date.getDate();
      let month = date.getMonth() + 1; // Months are zero-based
      let year = date.getFullYear();
      const slotDate = day + "_" + month + "_" + year;

      const { data } = await axios.post(backendUrl + '/api/user/book-appointment', { lawId, slotDate, slotTime }, { headers: { token } })

      if (data.success) {
        toast.success(data.message)
        getLawyersData()
        navigate('/my-appointments')
      }
      else {
        toast.error(data.message)
      }

    } catch (error) {
      console.log(error.message)
      toast.error(error.message)

    }
  }


  useEffect(() => {
    fetchLawInfo()
  }, [lawyers, lawId])

  useEffect(() => {
    getAvailableSlots()
  }, [lawInfo])

  useEffect(() => {
    //console.log(lawSlots);
  }, [lawSlots])



  return lawInfo && (
    <div>
      {/* --------lawyer details ------- */}
      <div className='flex flex-col sm:flex-row gap-4'>
        <div>
          <img className='bg-primary w-full sm:max-w-72 rounded-lg' src={lawInfo.image} alt="" />
        </div>
        <div className='flex-1 border border-gray-400 rounded-lg p-8 py-7 bg-white mx-2 sm:mx-0 mt-[-80px] sm:mt-0'>
          {/* ------lawyer info: name , degree, experience --------- */}
          <p className='flex items-center gap-2 text-2xl font-medium text-gray-900'>
            {lawInfo.name}
            <img className='w-5' src={assets.verified_icon} alt="" />
          </p>
          <div className='flex items-center gap-2 text-sm mt-1 text-gray-600'>
            <p>{lawInfo.degree}- {lawInfo.speciality}</p>
            <button className='py-0.5 px-2 border text-xs rounded-full'>{lawInfo.experience}</button>
          </div>

          {/* ------ lawyer about ------- */}
          <div>
            <p className='flex items-center gap-1 text-sm font-medium text-gray-900 mt-3'>About <img src={assets.info_icon} alt="" /></p>
            <p className='text-sm text-gray-500 max-w-[700px] mt-1'>{lawInfo.about}</p>
          </div>
          <p className='text-gray-500 font-medium mt-4'>
            Appointment fee: <span className='text-gray-600'>{currencySymbol} {lawInfo.fees}</span>
          </p>
        </div>
      </div>
      {/* ------ booking slots ---------- */}
      <div className='sm:ml-72 sm:pl-4 mt-4 font-medium text-gray-700'>
        <p>Booking slots</p>
        <div className='flex gap-3 items-center w-full overflow-x-scroll mt-4'>
          {
            lawSlots.length && lawSlots.map((item, index) => (
              <div onClick={() => setSlotIndex(index)} className={`text-center py-6 min-w-16 rounded-full cursor-pointer ${slotIndex === index ? 'bg-primary text-white' : 'border border-gray-200'}`} key={index}>
                <p>{item[0] && daysOfWeek[item[0].datatime.getDay()]}</p>
                <p>{item[0] && item[0].datatime.getDate()}</p>
              </div>
            ))
          }
        </div>

        <div className='flex items-center gap-3 w-full overflow-x-scroll mt-4'>
          {lawSlots.length && lawSlots[slotIndex].map((item, index) => (

            <p onClick={() => setSlotTime(item.time)} className={`text-sm font-light flex-shrink-0 px-5 py-2 rounded-full cursor-pointer ${item.time === slotTime ? 'bg-primary text-white' : 'text-gray-400 border border-gray-400'}`} key={index}>
              {item.time.toLowerCase()}
            </p>
          ))
          }
        </div>
        <button onClick={bookAppointment} className='bg-primary text-white text-sm font-light px-14 py-3 rounded-full my-6'>Book an appointment</button>
      </div>
      {/* ---Listing Related Lawyers --- */}
      <RelatedLawyers lawId={lawId} speciality={lawInfo.speciality} />
    </div>
  )
}

export default Appointment