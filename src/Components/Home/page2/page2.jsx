import React, { useState ,useEffect } from 'react';
import styles from './page2.module.css';
import { FaBuildingColumns } from "react-icons/fa6";
import ThirdDiv from './page2-3div';


const Page2 = () => {
  const [expand, setExpand] = useState(false);
const [bounce , setbounce] = useState(false)


useEffect(() => {
  let timeoutId;

  if (bounce) {
    timeoutId = setTimeout(() => {
      setbounce(false);  
    }, 1500); 
  }

  return () => {
    clearTimeout(timeoutId);
  };
}, [bounce]);




  return (
    <div className={`flex justify-center ${styles.div}`}>
      <div className=' mt-[10vh] h-[62vh]  w-[80vw] '>
        <div className='text-[5.5vh] font-[450] inline-block ml-[550px] mr-auto mb-[55px]'>
          How it works
        </div>

         <div className='flex justify-between  '> {/* Main div  center div */}

          <div className={`w-[50vh] px-[40px] h-[33vh] py-[27px] rounded-[10px] ${styles.bgcolor}`} onMouseEnter={() => setbounce(true)}  > {/* Main div  --first div  */}


<div className={`bg-white w-[41vh] mb-[8px] h-[75px] flex rounded-[10px] py-[17px] ${bounce ? styles.bouncing : '' } `}>


<div className='flex '>
<div className='mr-[20px] ml-[20px] bg-green-700 text-white h-[44px] shrink-0 flex items-center justify-center w-[44px] rounded-[50%] transtion duration-[0.5s]'><FaBuildingColumns  style={{ fontSize: '22px' }}/></div>

<div className='  h-[50px] text-[18px] leading-[-2px]  ml-[-5px]'>
  <p className='font-[500] mb-[-2px] text-[14.5px] capitalize'>US Treasury bill</p>
  <p className='text-gray-400 text-[12px]  font-[600] capitalize'>matures march, 2024</p>
</div>
<div className='ml-[80px]'>
  <p className='font-[500] text-[15px]'>$4,514,958</p>
  <p className='text-gray-400 text-[13px] font-[500] ml-[40px]'>64.5%</p>
</div>
</div>
</div>


<div className={` bg-white w-[41vh] h-[75px] mb-[8px]   rounded-[10px]  ${bounce ? styles.bouncing2 : '' } `}>
<div className='flex py-[15px]'>
<div className='mr-[20px] ml-[20px] bg-green-700 text-white h-[44px] shrink-0 flex items-center justify-center w-[44px] rounded-[50%] transtion duration-[0.5s]'><FaBuildingColumns  style={{ fontSize: '22px' }}/></div>

<div className='  h-[50px] text-[18px] leading-[-2px]  ml-[-5px]'>
  <p className='font-[500] mb-[-2px] text-[14.5px] capitalize flex w-[170px]'>goldman sachs treasury</p>
  <p className='text-gray-400 text-[12px]  font-[600] capitalize'>money market fund</p>
</div>
<div className='ml-[30px]'>
  <p className='font-[500] text-[15px]'>$4,514,958</p>
  <p className='text-gray-400 text-[13px] font-[500] ml-[38px]'>64.5%</p>
</div>
</div>
</div>



<div className={`bg-white w-[41vh] mb-[8px] h-[75px] flex rounded-[10px]   py-[17px]  ${bounce ? styles.bouncing3 : '' } `}>
<div className='flex'>
<div className='mr-[20px] ml-[20px] bg-green-700 text-white h-[44px] shrink-0 flex items-center justify-center w-[44px] rounded-[50%] transtion duration-[0.5s]'><FaBuildingColumns  style={{ fontSize: '22px' }}/></div>

<div className='  h-[50px] text-[18px] leading-[-2px]  ml-[-5px]'>
  <p className='font-[500] mb-[-2px] text-[14.5px] w-[170px] capitalize'>BNY-mellon govt. fund</p>
  <p className='text-gray-400 text-[12px]  font-[600] capitalize'>money market fund</p>
</div>
<div className='ml-[30px]'>
  <p className='font-[500] text-[15px]'>$4,514,958</p>
  <p className='text-gray-400 text-[13px] font-[500] ml-[40px]'>64.5%</p>
</div>
</div>


</div>

          </div>


          <div
            className={`w-[50vh] flex items-center justify-center h-[33vh] rounded-[10px] relative ${styles.bgcolor2}`}
            onMouseEnter={() => setExpand(true)}
            // onMouseLeave={() => setExpand(false)}
          >
            <div className={`w-[90%] h-[90px] rounded-[10px] ${styles.divgreen}`}></div>
            <div
              className={` h-[90px] absolute left-[25px] flex items-center text-[22px] px-[15px] text-white ${
                expand ? styles.expanded : styles.divgreenabsolute }`}
            >Runway</div>
            <div className={` h-[100%] absolute left-[25px]  ${expand ? styles.upperabsoluteexpand : styles.upperabsolute} `}></div>
          </div>

          <div className={`w-[48vh] h-[33vh] rounded-[20px] overflow-hidden ${styles.bgcolor}`}>

         <ThirdDiv/>
          </div>  {/* third div here  */}

  
        </div>

        <div className='flex mt-[13px]  justify-between '>
          <div className='w-[600px] mr-[50px]'><h1 className='text-[20px] font-[500] mb-[7px] '>Protect your cash</h1>
          <p className='text-gray-500 text-[18px]'>Secure your cash with US Treasury Bills, Money Market Funds and Cash Sweeps.</p>
          </div>

          <div className=' w-[680px] '><h1 className='text-[20px] font-[500] mb-[7px] '>Extend your runway</h1>
          <p className='text-gray-500  w-[450px] text-[18px]'>
Earn 5%* or more on your idle cash to extend runway, and make the most of every dollar.</p>
          </div>

          <div className='w-[600px] ml-[10px]'><h1 className='text-[20px] font-[500] mb-[7px] '>Simplify your finances
</h1>
          <p className='text-gray-500 text-[18px] '>Get the complete picture with analysis, forecasting & planning in one place.</p>
          </div>
        
        </div>
      

      </div>

    </div>
  );
};

export default Page2;
