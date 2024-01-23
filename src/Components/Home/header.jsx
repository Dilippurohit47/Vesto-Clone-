import React, { useEffect, useState } from 'react'
import { IoIosArrowDown } from "react-icons/io";
import Producthover from './Producthover';
import { useNavigate } from 'react-router-dom';


const header = () => {



  const [isHovered, setIsHovered] = useState(false);
  // bg-stone-100 
 const navigate = useNavigate();

 useEffect(() =>{

  alert("please make a page size 90% already it is  100%")

 },[])


  return (
    <div className={`  bg-stone-100 fixed top-0 left-0 h-[80px] w-[100%]   z-[99]  flex justify-between items-center px-[100px] `}>
 <div
        className={` ${ 
          isHovered
            ? 'h-[100vh] w-[100%] absolute bg-black bg-opacity-25 top-0 bottom-0  left-0  opacity-100'
            : 'h-[0] w-[0] top-0 left-0 absolute opacity-0 '
        } transition-opacity duration-500 ease-in-out`}      
      ></div>



        <div className='z-[10] cursor-pointer' onClick={() =>navigate('/')}>
  <img className='h-[28px]' src="https://assets-global.website-files.com/64f5d1a065124544feb1240f/64f5e77423d55b3b77a431a1_%F0%9F%8C%B2%20Logo%20green.svg" alt="" /> </div>



  <div className='flex gap-[35px] w-[200px] font-[500] text-gray-500 relative '>
      <div
        className='transition duration-300 ease-in-out   flex items-center gap-3 text-[18.5px] h-[35px] pb-[5px] hover:text-gray-700 relative'
        onMouseEnter={() => {
          setIsHovered(true);
        
        }}
        onMouseLeave={() =>{ setIsHovered(false) 
        }}
      >
        Products
        <div
          className={`cursor-pointer mt-1 hover:text-gray-700 transition duration-400 ease-in-out  ${
            isHovered ? 'rotate-180 ' : ''
          }`}
        >
          <IoIosArrowDown />
        </div>
      </div>
    

      {isHovered && ( 
  <div
    className={`absolute animate-example top-[28px] translate-y-0 left-[-50px] h-[37vh] p-[8px]   transition duration-500 ease-in-out rounded-[15px] w-[45vh] bg-white mt-[8px] opacity-[1]  `}
    onMouseEnter={() => setIsHovered(true)}
    onMouseLeave={() => setIsHovered(false)}
  >
    
<Producthover/>

  
  </div>
      )}
   
    <div className='flex gap-7 cursor-pointer text-[18.5px]'>
        <p className=' transition duration-400 ease-in-out hover:text-gray-700 '>Customer</p>
        <p className='transition duration-400 ease-in-out hover:text-gray-700 '>Blog</p>
        <p className='transition duration-400 ease-in-out hover:text-gray-700 '>About</p>
    </div>
  </div>
  <div className=''>
    <button className='px-[20px]  cursor-pointer border-2 py-3 m-2 rounded-[5px] font-[500]   hover:bg-gray-50 '>Sign in</button>
    <button className='px-[20px] border-2 py-3 rounded-[5px] bg-green-950 transition duration-300 ease-in-out text-white font-[500]  hover:bg-green-700'>Schedule a demo</button>
  </div>

    </div>
  )
}

export default header
