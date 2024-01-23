import React, { useState  , useEffect  ,useRef} from 'react'
import styles from "./thirdDiv.module.css"
const ThirdDiv = () => {


    const [isHovered, setisHovered] = useState(false);
    const timerRef = useRef(null);



const MouseEnter =()=>{
    setisHovered(true);
}
const MouseLeave =()=>{
    setisHovered(false);
}

  
    // const MouseEnter = () => {
    //   setisHovered(true);
    //   timerRef.current = setInterval(() => {
    //     setisHovered((prevHovered) => !prevHovered); // Toggle between true and false
    //   }, 1000);
    // };
  
    // const MouseLeave = () => {
    //   setisHovered(false);
    //   clearInterval(timerRef.current);
    // };


    // useEffect(() => {
    //     let timer = setInterval(() => {
    //       setisHovered((prevHovered) => !prevHovered); // Toggle between true and false
    //     }, 1000); // Toggle every 1 second

    //  const onMouseLeave = () =>{
    //     setisHovered(false)
    //     return () => clearInterval(timer);

    //  }
    //   }, []);

  return (

    <div className='h-[100vh] flex justify-center items-center  mt-[-120px]'>
    
    <div className={`  flex justify-center ${styles.container}` } onMouseEnter={MouseEnter} onMouseLeave={MouseLeave}>
   
<div className="w-[500px] h-[500px] rounded-[50%] border-[5px] flex justify-center  relative items-center border-bg-gray-950 ">
    <div className='w-[200px] h-[200px] bg-green-800 rounded-[50%]'></div>
    <div className={`w-[500px] h-[500px] rounded-[50%] border-[5px]  absolute border-b-red-600 ${isHovered ? styles.rotateCircle : ""} `}> 

<div className='h-[120px] w-[120px] rounded-[50%] absolute top-[-50px] left-[170px] bg-black'></div> 
<div className='h-[120px] w-[120px] rounded-[50%] absolute top-[10px] left-[350px] bg-red-400'></div>
<div className='h-[120px] w-[120px] rounded-[50%] absolute top-[170px] left-[425px] bg-red-500'></div>

{console.log(isHovered)}

</div>
</div>

    </div>
    </div>
  )
}

export default ThirdDiv;
