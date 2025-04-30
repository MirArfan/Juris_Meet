import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
// import { lawyers } from '../assets/assets';

const Lawyers = () => {

  const navigate=useNavigate();
  const { speciality } = useParams();
  const [filterLaw, setFilterLaw] = useState([]);
  const { lawyers } = useContext(AppContext);
  const applyFilter=()=>{
    if(speciality){
      setFilterLaw(lawyers.filter(law=>law.speciality===speciality))
    }
    else{
      setFilterLaw(lawyers);
    }
  }
  useEffect(()=>{ 
    applyFilter();
  },[lawyers, speciality])

  const [showFilter, setShowFilter]=useState(false);


  return (
    <div>
      <p className='text-gray-600'>Browse through the lawyers specialist.</p>
      <div className='flex flex-col sm:flex-row items-start gap-5 mt-5'>
        <button className={`py-1 px-3 border rounded text-sm transition-all sm:hidden ${showFilter ? 'bg-primary text-white' :''}`} onClick={()=>setShowFilter(prev=>!prev)}>Filters</button>
        <div className={`flex-col gap-4 text-sm text-gray-600 ${showFilter ? 'flex' : 'hidden sm:flex'}`}>
          <p onClick={()=>speciality==='Criminal Lawyer'?navigate('/lawyers') : navigate('/lawyers/Criminal Lawyer')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality==="Criminal Lawyer"? "bg-indigo-100 text-black":""}`}>Criminal Lawyer</p>
          <p onClick={()=>speciality==='Family Lawyer'?navigate('/lawyers') : navigate('/lawyers/Family Lawyer')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality==="Family Lawyer"? "bg-indigo-100 text-black":""}`}>Family Lawyer</p>
          <p onClick={()=>speciality==='Corporate Lawyer'?navigate('/lawyers') : navigate('/lawyers/Corporate Lawyer')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality==="Corporate Lawyer"? "bg-indigo-100 text-black":""}`}>Corporate Lawyer</p>
          <p onClick={()=>speciality==='Real Estate Lawyer'?navigate('/lawyers') : navigate('/lawyers/Real Estate Lawyer')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality==="Real Estate Lawyer"? "bg-indigo-100 text-black":""}`}>Real Estate Lawyer</p>
          <p onClick={()=>speciality==='Immigration Lawyer'?navigate('/lawyers') : navigate('/lawyers/Immigration Lawyer')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality==="Immigration Lawyer"? "bg-indigo-100 text-black":""}`}>Immigration Lawyer</p>
          <p onClick={()=>speciality==='Tax Lawyer'?navigate('/lawyers') : navigate('/lawyers/Tax Lawyer')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality==="Tax Lawyer"? "bg-indigo-100 text-black":""}`}>Tax Lawyer</p>
        </div>
        <div className='w-[80%] grid grid-cols-auto gap-4 gap-y-6'>
          {
            filterLaw.map((item,index)=>(
              <div onClick={()=>navigate(`/appointment/${item._id}`)}  key={index} className='border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500'>
                  <img className='bg-blue-50' src={item.image} alt="" />
                  <div className='p-4'>
                      <div className='flex items-center gap-2 text-sm text-center text-green-500'>
                          <p className='w-2 h-2 bg-green-500 rounded-full'></p><p>Available</p>
                      </div>
                      <p className='text-gray-900 text-lg font-medium'>{item.name}</p>
                      <p className='text-gray-600 text-sm'>{item.speciality}</p>
                  </div>
              </div>
          ))
          }
        </div>
      </div>
    </div>
  )
}

export default Lawyers