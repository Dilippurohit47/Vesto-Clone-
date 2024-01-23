import React from 'react'
import styles from "./page4.module.css"
import Line from '../page4/line.'
const Page4 = () => {

  
  return (
    <div className={` text-[50px] ${styles.maindiv} flex justify-center  `}>
        <div className=' w-[50%] h-[50%] mt-[100px]'>

            <div className='w-[500px] ml-[170px] text-center  font-[500] leading-[40px] text-[40px]'><h1>Want to know how much you can earn with Vesto?</h1>
            <p className='text-[20px] mt-[18px] text-center font-[500] leading-[20px] opacity-[0.6]'>Enter your business metrics, and we’ll send you an estimate of your potential earnings with Vesto.</p>
            </div>
            <div className={`h-[48vh] rounded-[0.90rem]  px-[50px]  py-[50px] mt-[60px] ${styles.greendiv}`}>
                <div className=' border-red-400 text-white h-[100%]'>
                <div className='text-[20px]  border-b-gray-600 border-b  '>
                    <p>Company cash balance </p>
                    <p className='mt-[12px] text-[28px] font-[500]'>$0.00</p>


                </div>
                <div className='mt-[40px]'>
                    <p className='text-[18px]  '>Preferred investment period</p>

                    <Line/>
                 
                </div>
                <div>
                <div className='text-[20px] mt-[70px]'>
                        <input className={`w-[500px] py-[15px] px-[15px] ${styles.inputcolor}  rounded-[5px] `}type="text" placeholder='Your work email ' />
                        <button className='bg-white  text-black  text-[18px] px-[20px] py-[15px] rounded-[5px] ml-[15px]'>Calculate my estimate</button>
                    </div>
                    
                </div>
                </div>




            </div>
        </div>

    </div>
  )
}

export default Page4
