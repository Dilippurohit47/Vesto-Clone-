import React from 'react'
import styles from '../page3/page3.module.css'
import Imageman from '../../../../public/64f9a988dc3916e0bbccfb0a_daniel macklin sofi-p-500.webp'

const Page7 = () => {
  return (
    <div className={`mt-[20px] h-[60vh] pt-[88px] px-[150px] text-white text-[200px] ${styles.page3}`  }>

    <div className={`h-[42vh] flex  flex-row-reverse ${styles.centerdiv}`}>
      <div className='w-[72%] ml-[200px] '>
          <img className='h-[380px] rounded-[15px]' src={Imageman} alt="" />
      </div>
      <div className=' text-[20px] max-w-[63%] '>
  
      <h1 className={`text-[43px] leading-[45px] ${styles.textdiv1}`}>“Every company needs to be responsibly managing their cash. Now, Vesto is helping companies do this on autopilot.”</h1>
  
  
      <p className='mt-[40px] font-[100]'>–— Daniel Macklin
  </p>
  <p className='text-[17px] text-gray-white opacity-[0.7]'>Co-Founder of SoFi; Investor in Vesto</p>
  
  
  
  <p className='text-[13px] mt-[37px] opacity-[0.7]'>Daniel Macklin is not a Vesto customer; he is an investor in Vesto, resulting in a conflict of interest as he has a direct interest in the success of the company.</p>
  
      </div>
   
    </div>
  
  
  
  
      </div>
  )
}

export default Page7
