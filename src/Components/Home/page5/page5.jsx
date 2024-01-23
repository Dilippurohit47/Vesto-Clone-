import React from 'react'
import styles from "./page5.module.css"
import { FaBuildingColumns } from "react-icons/fa6";
import { VscGraphLine } from "react-icons/vsc";
import { FaArrowRightLong } from "react-icons/fa6";
import Image1st from '../../../../public/graph imahe 1stdiv.png'
import Image2nd from '../../../../public/graph 2nd image.png'
import Image3rd from '../../../../public/grpah 3rd image.png'
import { CiDollar } from "react-icons/ci";
const page5 = () => {
  return (
    <div className=' flex justify-center pt-[150px]   bg-white h-[170vh]'>

<div className='bg-white w-[80%]   h-[70vh] '>

<h1 className='text-center text-[60px]   font-[500]'>Cash management, simpliified</h1>


<div className={`px-[60px]  bg-opacity-[0.5] relative overflow-hidden rounded-[20px] py-[45px] flex mt-[50px] h-[42vh] ${styles.bgcolor}`}> 

<div className=' h-[100%] '>
    <div className='bg-stone-200  flex px-[20px] py-[4px] rounded-[50px] w-[150px] gap-[12px] items-center  text-center'> <FaBuildingColumns /> <p className='text-[18px]'>Treasury</p> </div>
    <h1 className=' text-[35px] mt-[30px] w-[500px] font-[500]'>Extend and secure your runway</h1>
    <p className=' w-[700px] opacity-[0.8] text-[18px]'>Earn yield on your idle cash with US Treasury Bills, Money Market Funds, and Cash Sweeps to help you make the most of every dollar.</p>

    <button className='bg-green-950 mt-[40px] px-[30px] flex text-center justify-center gap-[10px]  hover:bg-green-700 transition ease-in-out duration-300  text-white py-[15px] text-[20px]'>Learn More <p className='mt-[7px] font-[400]'><FaArrowRightLong/></p></button>
</div>


<div className={` translate-x-[70px] absolute border-[45px] w-[50%] h-[100%] rounded-[20px] right-[-90px] ${styles.bordercolor}`}>

<img className='h-[36vh]' src={Image1st} alt="" />
</div>

</div>


<div className={`px-[60px]  relative overflow-hidden rounded-[20px] py-[45px] flex mt-[20px] h-[42vh] ${styles.bgcolor}`}> 

<div className=' h-[100%] '>
    <div className='bg-stone-200  flex px-[20px] py-[4px] rounded-[50px] w-[150px] gap-[12px] items-center  text-center'> <VscGraphLine /> <p className='text-[18px]'>Pulse</p> </div>
    <h1 className=' text-[35px] mt-[30px] w-[550px] font-[500]'>All your financials, all in one place</h1>
    <p className=' w-[700px] opacity-[0.8] text-[18px]'>Consolidate all of your bank accounts, accounting platforms, and financial systems into a single view of your business finances.</p>

    <button className='bg-green-950 mt-[40px] px-[30px] flex text-center justify-center gap-[10px]  hover:bg-green-700 transition ease-in-out duration-300  text-white py-[15px] text-[20px]'>Learn More <p className='mt-[7px] font-[400]'><FaArrowRightLong/></p></button>
</div>


<div className={` translate-x-[70px] absolute border-[45px] w-[50%] h-[100%] rounded-[20px] right-[-90px] ${styles.bordercolor}`}>

<img className='h-[36vh]' src={Image2nd} alt="" />
</div>

</div>
{/*3rd div */}
<div className={`px-[60px]  relative overflow-hidden rounded-[20px] py-[45px] flex mt-[20px] h-[42vh] ${styles.bgcolor}`}> 

<div className=' h-[100%] '>
    <div className='bg-stone-200  flex px-[20px] py-[4px] rounded-[50px] w-[150px] gap-[12px] items-center  text-center'> <CiDollar /> <p className='text-[18px]'>Pulse</p> </div>
    <h1 className=' text-[35px] mt-[30px] w-[550px] font-[500]'>A line of credit that works for you</h1>
    <p className=' w-[700px] opacity-[0.8] text-[18px]'>Easily unlock a line of credit without disrupting your treasury yield.</p>

    <button className='bg-green-950 mt-[40px] px-[30px] flex text-center justify-center gap-[10px]  hover:bg-green-700 transition ease-in-out duration-300  text-white py-[15px] text-[20px]'>Learn More <p className='mt-[7px] font-[400]'><FaArrowRightLong/></p></button>
</div>


<div className={` translate-x-[70px] absolute border-[45px] w-[50%] h-[100%] rounded-[20px] right-[-90px] ${styles.bordercolor}`}>

<img className='h-[36vh]' src={Image3rd} alt="" />
</div>

</div>

    
</div>

    </div>
  )
}

export default page5
