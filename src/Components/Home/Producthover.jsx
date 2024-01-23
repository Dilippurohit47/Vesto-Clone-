import React from 'react'
import { FaBuildingColumns } from "react-icons/fa6";
import { VscGraphLine } from "react-icons/vsc";

import { CiDollar } from "react-icons/ci";
const Producthover = () => {
  return (
    <div className='mt-[5px] pt-[1px] pl-[0px] cursor-pointer '>
        
      <p className='uppercase pl-[15px]'>Products</p>

      <div className='  w-[100%] pb-[20px] h-[100%] text-[20px] flex items-center pt-[15px] pl-[15px] hover:bg-gray-200 transtion duration-75 ease-in'>
   <div className='mr-[20px]  bg-green-700 text-white h-[48px] shrink-0 flex items-center justify-center w-[48px] rounded-[50%] hover:bg-green-950 transtion duration-[0.5s]'><FaBuildingColumns/></div>
   <div className='leading-[28px]'>
     <p className='text-black text-[18px]'>Treasury </p>
    <p className='text-[18px] text-gray-500 font-[500]'>Protect and extend runway.</p>
   </div>
      </div>
      <div className='  w-[100%] pb-[20px] h-[100%] text-[20px] flex items-center pt-[15px] pl-[15px] hover:bg-gray-200 transtion duration-75 ease-in'>
   <div className='mr-[20px]  bg-green-700 text-white h-[48px] shrink-0 flex items-center justify-center w-[48px] rounded-[50%] hover:bg-green-950 transtion duration-[0.5s]'><VscGraphLine/></div>
   <div className='leading-[28px]'>
     <p className='text-black text-[18px]'>Pulse </p>
    <p className='text-[18px] font-[500]'>All your financials, all in one place.</p>
   </div>
      </div>
      <div className='  w-[100%] pb-[20px] h-[100%] text-[20px] flex items-center pt-[15px] pl-[15px] hover:bg-gray-200 transtion duration-75 ease-in'>
   <div className='mr-[20px]  bg-green-700 text-white h-[48px] shrink-0 flex items-center justify-center w-[48px] rounded-[50%] hover:bg-green-950 transtion duration-[0.5s]'><CiDollar/></div>
   <div className='leading-[28px]'>
     <p className='text-black text-[18px]'>Capital </p>
    <p className='text-[18px] font-[500]'>Credit that works for you.</p>
   </div>
      </div>
     
    </div>
  )
}

export default Producthover
