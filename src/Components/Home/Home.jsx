import React from 'react'
import Pageone from './Pageone'
import Running from '../running'
import Page2 from './page2/page2'
import Page3 from './page3/Page3'
import Page4 from './page4/Page4'
 import  Page5 from '../Home/page5/page5'
import Page6 from './page6/Page6'
import Page7 from './page7/Page7'
import Page8 from './Page8/page8'

const Home = () => {
  return (
    <div className=' bg-stone-100 h-[760vh] overflow-x-hidden overflow-y-hidden'>
    
    <Pageone/>
    <Running/>
    <Page2/>
    <Page3/>
    <Page4/>
    <Page5/>
    <Page6/>
    <Page7/>
    <Page8/>


    </div>
  )
}

export default Home
