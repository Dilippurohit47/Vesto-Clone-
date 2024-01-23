import React from 'react'
import ferry from "../assets/Ferry.png"
import july from "../assets/july.png"
import contrary from "../assets/cont.png"
import treecard from "../assets/64fb03440b6a50572eb9fa3e_Treecard.png"
import tiny from "../assets/tiny.png"
import mercantile from "../assets/mercantile.png"
import assemble from "../assets/assem.png"
import faliam from "../assets/faliam.png"
import { FaArrowRightLong } from "react-icons/fa6";

const running = () => {
  return (
    <div className='running-color h-[16vh]  relative flex flex-col items-center overflow-hidden w-[100%]'>
  

    <div className='mt-[15px] text-[20px] text-gray-500 mb-[30px]'>
  Join leading companies on Vesto
  </div>
  
  <div className='    text-[22px] running-hello    w-[100%] '>
  <div className=' grad '></div>
  <div className=' right-grad '></div>
  <div className='absolute z-[11] right-[150px] rounded-[3px] meet-button '>
    <div className=''>Meet our Customers  </div>
    <div className='mt-[2px]'><FaArrowRightLong /> </div>
  </div>





<div className='running  '>
 
<img className='h-[25px] ' src={contrary} alt="" />
<img className='h-[30px]'  src={july} alt="" />
<img className='h-[30px]'  src={ferry} alt="" />
<img className='h-[35px]'  src={treecard} alt="" />
<img className='h-[35px]'  src={tiny} alt="" />
<img className='h-[13px]'  src={mercantile} alt="" />
<img className='h-[30px]' src={assemble} alt="" />
<img className='h-[25px]' src={faliam} alt="" />
 
<img className='h-[25px]' src={contrary} alt="" />
<img className='h-[30px]'  src={july} alt="" />
<img className='h-[30px]'  src={ferry} alt="" />
<img className='h-[35px]'  src={treecard} alt="" />
<img className='h-[35px]'  src={tiny} alt="" />
<img className='h-[13px]'  src={mercantile} alt="" />
<img className='h-[30px]' src={assemble} alt="" />
<img className='h-[25px]' src={faliam} alt="" />



</div>











</div>

 

    </div>
  )
}

export default running
