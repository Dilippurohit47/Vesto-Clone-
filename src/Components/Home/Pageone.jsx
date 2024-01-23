import React from 'react'

import { FaArrowRightLong } from "react-icons/fa6";


const Pageone = () => {
  return (
    <div className=' justify-center items-center  h-[88vh] bg-stone-100 pt-[25vh]  '>
     <h1 className='flex justify-center text-[70px] font-[500] text-gray-800 pb-[10px]'>Cash management for startups</h1>
     <p className='flex justify-center text-[28px] text-gray-600 px-[400px]'>Earn 5%* or more yield on your idle cash, and simplify your </p>
     <p className='flex justify-center text-[28px] text-gray-600 pb-[40px] px-[400px]'> finances in one unified platform.</p>


     <div className='flex justify-center pb-[20px]  gap-[10px]'>
    <input  className="w-[400px] bg-gray-200 pl-3 py-5 border-none outline-none" type="text" placeholder='your work email ' />
    <button className='px-[20px] border-2 py-3 w-[200px] flex items-center gap-[15px] p-y[5px] rounded-[5px] bg-green-950 transition duration-300 ease-in-out text-white font-[500]  hover:bg-green-700'>Schedule a demo <FaArrowRightLong/> </button>

     </div>
     <p className='flex justify-center pb-[15px]'>or</p>
     <div className='flex justify-center' >
    <button className='   px-[20px] border-2 py-3 m-2 rounded-[5px] font-[500] text-gray-500 hover:bg-gray-50 '>Open an account </button>
    </div>
    </div>
  )
}

export default Pageone
