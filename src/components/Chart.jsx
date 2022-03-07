import React from 'react'
import chart from '../assets/Mobile/group-141-hero-1@2x.png'
import chart1 from '../assets/Mobile/group-186-hero-1@2x.png'
import chart2 from '../assets/Mobile/group-187-hero-1@2x.png'
import chart3 from '../assets/Mobile/group-188-hero-1@2x.png'
import gsap from 'gsap'
import {ScrollTrigger} from 'gsap/all'
function Chart() {
  gsap.registerPlugin(ScrollTrigger)
  React.useEffect(()=>{
    gsap.fromTo('.chart-mobile > div', {opacity: 0, y: 35}, {opacity: 1, y: 0, delay: 0.2,duration: 0.4, stagger:{amount: 0.4}, scrollTrigger:'.chart-mobile'})
  },[])
  return (
    <div>
        <div className="chart-mobile d-lg-none">
          <div className="chart">
            <img src={chart} alt=""/>
          </div>
          <div className="chart1">
            <img src={chart1} alt=""/>
          </div>
          <div className="chart2">
            <img src={chart2} alt=""/>
          </div>
          <div className="chart3">
            <img src={chart3} alt=""/>
          </div>
        </div>
    </div>
  )
}

export default Chart