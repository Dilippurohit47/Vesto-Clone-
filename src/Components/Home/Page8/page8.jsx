import React, { useState } from 'react'
import styles from "./page8.module.css"
import Imageone from '../../../../public/hand.jpg'
import Imagetwo from '../../../../public/man sitting.jpg'
import Imagethree from '../../../../public/woman sitting.jpg'
import { FaArrowRightLong } from "react-icons/fa6";
// import { FaArrowRightLong } from "react-icons/fa6";
import { FaArrowLeftLong } from "react-icons/fa6";


const page8 = () => {

    const [move,setmove] = useState(false);
    console.log(move)
   
  return (
    <div className='h-[90vh]  bg-white '>

        <div className=' flex h-[80%] items-center overflow-x-hidden overflow-y-hidden  '>
            <div className='translate-x-[190px]'><p className='text-[30px]'>Case studies</p>
    <button className='px-[20px] border-2   w-[200px] flex items-center gap-[15px] py-[15px] rounded-[5px] bg-green-950 transition duration-300 ease-in-out text-white font-[500]  
    hover:bg-green-700'>Schedule a demo <FaArrowRightLong/> </button>
            
            </div>


{/*div for scroll hover box */}

            <div className='h-[80%] gap-[30px] flex overflow-x-auto overflow-y-hidden    translate-x-[400px]'>

{/*first hover box */}
        <div className={`h-[100%] relative rounded-[20px]   overflow-hidden group w-[430px] transition ease-in-out duration-[0.5s] ${move ? 'translate-x-[-430px]' : ""}`}>
        <img  className='h-[510px] w-[500px] absolute rounded-[20px]'  src={Imageone} alt="" />
        <div className='h-[100%] w-[100%] bg-black opacity-[0.3] rounded-[20px] absolute'></div>

        <div className='absolute mt-[180px] translate-y-[110px]  overflow-hidden ml-[30px] transition ease-in-out duration-[0.4s] text-white group-hover:translate-y-[30px]'>
            <p className='text-[25px] font-[500] tracking-[8px] uppercase'>Mercantile</p>
            <p className={`text-[1.6rem] ${styles.font} leading-[30px] mt-[10px] `}>"After raising $22M in funding, our cash was just sitting there, being eaten alive by inflation. Vesto has made it incredibly easy for us to securely extend our runway."</p>

            <button className='px-[15px] border-2 border-white  w-[150px] flex items-center gap-[15px] py-[10px] mt-[30px] rounded-[5px]  transition duration-300 ease-in-out text-white font-[500]  
   '>Read more <FaArrowRightLong/> </button>
            
        </div>



        </div>
{/*second hover box */}
        <div className={` h-[100%] relative rounded-[20px]   overflow-hidden group w-[430px]  transition ease-in-out duration-[0.5s] ${move ? 'translate-x-[-430px]' : ""}`} >
        <img  className='h-[510px] w-[500px] absolute rounded-[20px]'  src={Imagetwo} alt="" />
        <div className='h-[100%] w-[100%] bg-black opacity-[0.3] rounded-[20px] absolute'></div>

        <div className='absolute mt-[180px] translate-y-[110px]  overflow-hidden ml-[30px] transition ease-in-out duration-[0.4s] text-white group-hover:translate-y-[30px]'>
            <p className='text-[25px] font-[500] tracking-[8px] uppercase'>Mercantile</p>
            <p className={`text-[1.6rem] ${styles.font} leading-[30px] mt-[10px] `}>"Teaming up with Vesto has been a game-changer for us. It's great to actually earn yield and extend our runway, while having our cash properly diversified."</p>

            <button className='px-[15px] border-2 border-white  w-[150px] flex items-center gap-[15px] py-[10px] mt-[30px] rounded-[5px]  transition duration-300 ease-in-out text-white font-[500]  
   '>Read more <FaArrowRightLong/> </button>
            
        </div>



        </div>
{/*third hover box */}
        <div className={` h-[100%] relative rounded-[20px]  overflow-hidden group w-[430px] transition ease-in-out duration-[0.5s] ${move ? 'translate-x-[-430px]' : ""}`}>
        <img  className='h-[510px] w-[500px] absolute rounded-[20px]'  src={Imagethree} alt="" />
        <div className='h-[100%] w-[100%] bg-black opacity-[0.3] rounded-[20px] absolute'></div>

        <div className='absolute mt-[180px] translate-y-[110px]  overflow-hidden ml-[30px] transition ease-in-out duration-[0.4s] text-white group-hover:translate-y-[30px]'>
            <p className='text-[25px] font-[500] tracking-[8px] uppercase'>Mercantile</p>
            <p className={`text-[1.6rem] ${styles.font} leading-[30px] mt-[10px] `}>"Teaming up with Vesto has been a game-changer for us. It's great to actually earn yield and extend our runway, while having our cash properly diversified."</p>

            <button className='px-[15px] border-2 border-white  w-[150px] flex items-center gap-[15px] py-[10px] mt-[30px] rounded-[5px]  transition duration-300 ease-in-out text-white font-[500]  
   '>Read more <FaArrowRightLong/> </button>
            
        </div>



        </div>
            </div>
        </div>

        <div className='translate-x-[50%] '>

            <button className='mr-[20px] h-[50px] bg-white border border-black border-opacity-[0.4] w-[50px] text-center pl-[17px] rounded-[50%]' onClick={()=> setmove(false)}> <FaArrowLeftLong/></button>

            <button className=' h-[50px] bg-white border border-black border-opacity-[0.4] w-[50px] text-center pl-[17px] rounded-[50%]' onClick={()=> setmove(true)}><FaArrowRightLong/></button>
        </div>
      
    </div>
  )
}

export default page8
