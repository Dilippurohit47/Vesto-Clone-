import React, { useState,useEffect } from 'react'
import styles from  "./page6.module.css"
import Stockimg from '../../../../public/stock image 1st div.png'
import { IoMdLock } from "react-icons/io";
import { RiSecurePaymentFill } from "react-icons/ri";
const Page6 = () => {
const [bounce , setbounce] = useState(false);
const [bounce2div , setbounce2div] = useState(false);


const handleMouse =() =>{
    setbounce(true)
}





useEffect(() => {
    let timer;
if(bounce2div){
     timer = setTimeout(() => {
    setbounce2div(false);

        
    }, 1000)};

    return ()=> {
        
    clearTimeout(timer);

    }


},[bounce2div])

  return (
    <div className= {` h-[100vh] py-[100px] px-[170px] ${styles.maindiv} `}>
        <div className='text-center'><h1 className='text-[45px] font-[500] '>Safety and security</h1>
        <p className='opacity-[0.7] text-[20px]'>Purpose-built to maximize the security of your assets.</p>
        </div>



        <div className=' h-[55vh] flex gap-[35px]  mt-[40px]'>


            {/* first box*/}
            <div className={`w-[30%] h-[100%]  rounded-[20px] `}>

                <div className={`h-[60%] overflow-hidden relative ${styles.innerdiv}  `} onMouseEnter={ handleMouse}>
                    <img className={`h-[99%] translate-x-[40px] w-[100%px]  `} src={Stockimg} alt="" />
                    <div className={`bg-green-950 top-[35%] left-[35%] rounded-[50%] text-[80px] p-[20px]  absolute text-white  ${ bounce ? styles.bouncegreenball : ""} `}><IoMdLock/></div>
          
                </div>

            <div className='bg-white h-[40%] px-[30px] py-[30px] w-[100%] translate-x-[3px]'>
            <h1 className='text-[20px]'>Custodial account</h1>
            <p className='leading-[25px] mt-[10px] opacity-[0.7] text-[18px] '>Your assets are held entirely under your name, kept safe with no bank risk, and Vesto is never in the flow of funds.</p>
            </div>
           
            </div>


            {/* second box*/}
            <div className={`w-[30%] h-[100%]  rounded-[20px] `}>

                <div className={`h-[60%] overflow-hidden gap-[15px] relative  flex flex-col justify-center items-center text-center ${styles.innerdiv}  `} onMouseEnter={()=>setbounce2div(true)}>
                     {/* second box ka first rectnagle*/}
                    <div className={`bg-green-950 h-[8vh]  rounded-[12px] flex text-white px-[15px] py-[30px] items-center  w-[310px] ${bounce2div ? styles.secondDiv1stElem : ''}`}>
                        <p className='mr-[15px] opacity-[0.8] '><RiSecurePaymentFill  style={{ height: '24px', width: '24px' }}/></p>
                        <h2 className='font-[500] text-[18px] opacity-[0.8]'>SIPC insurance </h2>
                        <h2 className='font-[800] translate-x-[75px] tracking-[-2px]  opacity-[0.8] text-[25px] h-[34px]'>SIPC</h2>


                    </div>
                   
                     {/* second box ka sec rectnagle*/}
                    <div className={` h-[8vh] rounded-[12px] flex text-white px-[15px] py-[30px] items-center  w-[310px] ${styles.secrectangleBG}  ${bounce2div ? styles.secondDiv2ndElem : ''}  `}>
                        <p className='mr-[15px] opacity-[0.8] '><RiSecurePaymentFill  style={{ height: '24px', width: '24px' }}/></p>
                        <h2 className='font-[500] text-[18px] opacity-[0.8]'>FDIC insurance </h2>
                        <h2 className='font-[800] translate-x-[75px] tracking-[-2px]  opacity-[0.8] text-[25px] h-[34px]'>FDIC</h2>


                    </div>
                   
                  
                </div>

            <div className='bg-white h-[40%] px-[30px] py-[30px] w-[100%] translate-x-[3px]'>
            <h1 className='text-[20px]'>Insurance</h1>
            <p className='leading-[25px] mt-[10px] opacity-[0.7] text-[18px] '>
Accounts are protected with $500K of SIPC insurance, with up to an additional $5M of FDIC insurance available*.</p>
            </div>
           
            </div>
            {/* third box*/}
            <div className={`w-[30%] h-[100%]  rounded-[20px] `}>

                <div className={`h-[60%] overflow-hidden gap-[15px] relative  flex flex-col justify-center items-center text-center ${styles.innerdiv}  `}>
                     {/* second box ka first rectnagle*/}
                    <div className={`bg-green-950 group h-[200px] relative   rounded-[50%] flex text-white px-[15px] py-[30px] items-center  w-[200px] `}>
                      <h1 className='group-hover:text-red-500'>Work in progress-------</h1>
                      <h1 className=' group-hover:translate-y-[-30px] transition ease-in-out duration-[0.5s] absolute'>Work in progress-------</h1>
                      <h1 className=' absolute group-hover:translate-y-[30px] transition ease-in-out duration-[0.5s]'>Work in progress-------</h1>


                    </div>
                   
                
                  
                </div>

            <div className='bg-white h-[40%] px-[30px] py-[30px] w-[100%] translate-x-[3px]'>
            <h1 className='text-[20px]'>Compliance first</h1>
            <p className='leading-[25px] mt-[10px] opacity-[0.7] text-[18px] '>
            Vesto is SOC 2 compliant and SEC registered. We have a fiduciary duty to put our client’s interests above all else..</p>
            </div>
           
            </div>

        </div>
      
    </div>
  )
}

export default Page6
