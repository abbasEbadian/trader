import React from 'react'
import step1 from '../assets/Desktop/addsetupmock-1@2x.png'
import step2 from '../assets/Desktop/i-phone-12-promini-1-2@2x.png'
import step3 from '../assets/Desktop/tradeanalysismock-1.png'

function AccordionDesktop() {
    // const props = useSpring({ to: { opacity: 1 }, from: { opacity: 0 } })
    const [visible, setVisible] = React.useState(0)
    const onChange = (s)=>{
        setVisible(s)
    }
    
  return (
      <div className='accordion-container d-none d-lg-block flex-row-reverse mt-5'>
        <div className="row">
            <div className="col-1"></div>
            <div className="col-4 images">
                <div className={"step-img-box1"  + (visible===0?" visible ":"")}>
                    <img src={step1} alt="" className={visible===0?"  bounceIn":""}/>
                </div>
                <div className={"step-img-box2" + (visible===1?" visible ":"")}>
                    <img src={step2} alt="" className={visible===1?"  bounceIn":""} />
                </div>
                <div className={"step-img-box3" + (visible===2?" visible ":"")}>
                    <img src={step3} alt="" className={visible===2?"  bounceIn":""}/> 
                </div>
            </div>
            <div className="col-6 content p-5 mr-auto   ">
                <div>
                <span className="How-its-done">How its done</span>

                    <div className={"step1 step" + (visible===0?" visible":"")} onClick={e=>onChange(0)}>
                        <span className={"step-title" }>
                        Add Setup
                        </span>
                        <p className="step-text">
                            Log your recent trades in the app. Can include:
                            Pair, Entry, Amount, Target, Stoploss and more ...
                        </p>

                    </div>
                    <div className={"step2 step" + (visible===1?" visible":"")} onClick={e=>onChange(1)}>
                        <span className="step-title">
                         Track Setups
                        </span>
                        <p className="step-text">
                        Monitor all your trades from different exchanges  with a single glance.
                        </p>
                    </div>
                    <div className={"step3 step" +  (visible===2?" visible":"")} onClick={e=>onChange(2)}>
                        <span className={"step-title"}>
                         Analyze performance
                        </span>
                        <p className="step-text">
                        Get a clear understanding of how you’ve performed using our detailed analysis systems.
                        </p>
                        
                    </div>
                </div>
            </div>
            
        </div>
        
    
    </div>
  )
}

export default AccordionDesktop