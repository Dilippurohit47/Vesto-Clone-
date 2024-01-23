import React from 'react'
import styles from './page3.module.css'
import Imageman from '../../../../public/64ffa775ee23dbcd3549d7b1_5f64d15baec49130add6f522_Andrew Wilkinson-p-500.jpg'

const page3 = () => {
  return (
    <div className={`mt-[20px] h-[64vh] pt-[88px] px-[150px] text-white text-[200px] ${styles.page3}`  }>

  <div className={`h-[42vh] flex ${styles.centerdiv}`}>
    <div className='w-[72%] '>
        <img className='h-[320px] rounded-[15px]' src={Imageman} alt="" />
    </div>
    <div className=' text-[20px] max-w-[63%] '>

    <h1 className={`text-[43px] leading-[45px] ${styles.textdiv1}`}>“Vesto is a no brainer for startups sitting on funding to extend their runway, or just for bootstrappers to build up their war chest.”</h1>


    <p className='mt-[40px] font-[100]'>– Andrew Wilkinson
</p>
<p className='text-[17px] text-gray-white opacity-[0.7]'>CEO at Tiny</p>



<p className='text-[11.5px] mt-[37px] opacity-[0.7]'>Testimonial is from an owner or employee of a current Vesto customer. Customers have not or will not be compensated in any way when providing testimonials. Tiny is an investor in Vesto, resulting in a conflict of interest as they have a direct interest in the success of the Company.</p>

    </div>
 
  </div>




    </div>
  )
}

export default page3
