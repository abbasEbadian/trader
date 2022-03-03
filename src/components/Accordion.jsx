import React from 'react'
import step1 from '../assets/img/step1.png'
import step2 from '../assets/img/step2.png'
import step3 from '../assets/img/step3.png'
import VisibilitySensor from "react-visibility-sensor";

function Accordion() {
    // const props = useSpring({ to: { opacity: 1 }, from: { opacity: 0 } })
    const [visible1, setVisible1] = React.useState(false)
    const [visible2, setVisible2] = React.useState(false)
    const [visible3, setVisible3] = React.useState(false)
    const onChange1 = (s)=>{
        setVisible1(s)
    }
    const onChange2 = (s)=>{
        setVisible2(s)
    }
    const onChange3 = (s)=>{
        setVisible3(s)
    }
  return (
    <div>
        <div className="Accordion-mobile d-lg-none">
            <span className="How-its-done">How its done</span>
            <div className="step1 step">
               
                <span className="step-title">
                Step 1: Add Setup
                </span>
                <p className="step-text">
                    Log your recent trades in the app. Can include:
                    Pair, Entry, Amount, Target, Stoploss and more ...
                </p>
                <div className="step-img-box1">
                <VisibilitySensor onChange={onChange1} partialVisibility>
                    <img src={step1} alt="" className={visible1?"visible":""}/>
                </VisibilitySensor>
                    

                </div>

            </div>
            <div className="step2 step">
                
                <span className="step-title">
                Step 2: Track Setups
                </span>
                <p className="step-text">
                Monitor all your trades from different exchanges  with a single glance.
                </p>
                <div className="step-img-box2">
                    <VisibilitySensor onChange={onChange2} partialVisibility>
                        <img src={step2} alt="" className={visible2?"visible":""}/>
                    </VisibilitySensor>
                </div>

            </div>
            <div className="step3 step">
                
                <span className="step-title">
                Step 3: Analyze performance
                </span>
                <p className="step-text">
                Get a clear understanding of how you’ve performed using our detailed analysis systems.
                </p>
                <div className="step-img-box3">
                    <VisibilitySensor onChange={onChange3} partialVisibility>
                        <img src={step3} alt="" className={visible3?"visible":""}/>
                    </VisibilitySensor>
                </div>

            </div>

        </div>
    </div>
  )
}

export default Accordion