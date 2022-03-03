import React from 'react'
import iphone1 from '../assets/img/1.png'
import iphone2 from '../assets/img/2.png'
import iphone3 from '../assets/img/3.png'
import iphone4 from '../assets/img/4.png'
import iphone5 from '../assets/img/5.png'
function Slider() {
    const [open, setOpen] = React.useState(false)
    React.useEffect(()=>{

        setTimeout(()=>{
            setOpen(true)
        }, 2000)
    }, [])
  return (
    <div>
        <div className={"slider-box" + (open?" open": "")}>
            <div className="img-box">
                <img src={iphone3} alt=""/>
            </div>
            <div className="img-box">
                <img src={iphone2} alt=""/>
            </div>
            <div className="img-box">
                <img src={iphone1} alt=""/>
            </div>
            <div className="img-box">
                <img src={iphone4} alt=""/>
            </div>
            <div className="img-box">
                <img src={iphone5} alt=""/>
            </div>
    
        </div>
    </div>
  )
}

export default Slider