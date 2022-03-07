import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import MainIntro from'../components/MainIntro'
import Slider from '../components/Slider'
import WhatWeDo from '../components/WhatWeDo'
import Statistics from '../components/Statistics'
import Scroll from '../components/Scroll'
import Community from '../components/Community'
import Accordion from '../components/Accordion'
import AccordionDesktop from '../components/AccordionDesktop'
import Chart from '../components/Chart'
import AOS from 'aos'
function Main() {
  
  return (<>
        <Header/>
        <div className='container'>
          <MainIntro/>
          <Chart/>
          <Slider/>
          <WhatWeDo/>
          <Accordion/>
          <AccordionDesktop/>
          <Statistics/>
          <Scroll/>
          <Community/>
        </div>
        <Footer/>
    </>
  )
}

export default Main