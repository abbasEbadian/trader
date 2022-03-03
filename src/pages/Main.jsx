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
          <section data-aos="fade-up"><Chart/></section>
          <section data-aos="fade-up"><Slider/></section>
          <section data-aos="fade-up"><WhatWeDo/></section>
          <section data-aos="fade-up"><Accordion/></section>
          <section data-aos="fade-up"><AccordionDesktop/></section>
          <section data-aos="fade-up"><Statistics/></section>
          <section data-aos="fade-up"><Scroll/></section>
          <section data-aos="fade-up"><Community/></section>
        </div>
        <Footer/>
    </>
  )
}

export default Main