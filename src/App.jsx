import { useState } from 'react'
import { BrowserRouter , Route , Routes } from 'react-router-dom'
import './App.css'
import Header from './Components/Home/header'
import Home from './Components/Home/Home'
import ThirdDiv from './Components/Home/page2/page2-3div'
import Line from './Components/Home/page4/line.'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <BrowserRouter>
   <Header/>
   <Routes>
<Route path='/' element={<Home/>}/>
<Route path='/line' element={<Line/>}/>

   </Routes>
   </BrowserRouter>
 
    </>
  )
}

export default App
