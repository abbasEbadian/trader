import React from 'react'
import ReactVisibilitySensor from 'react-visibility-sensor'

function Statistics() {
    const value1Max = 2431
    const value1Inc = 20
    
    const value2Max = 99.99
    const value2Inc = 2
    
    const value3Max = 500
    const value3Inc = 4
    
    const value4Max = 100
    const value4Inc = 1

    const [visibility, setVisibility] = React.useState(false)
    const [value1, setValue1] = React.useState(0)
    const [value2, setValue2] = React.useState(0)
    const [value3, setValue3] = React.useState(0)
    const [value4, setValue4] = React.useState(0)
    const handleVisibility = (state)=>{
        if(state && !visibility) setVisibility(true)
    }
    React.useEffect(()=>{
        if(visibility){
            window.inter1 = setTimeout(()=>{
                let curr = Math.min(value1 + value1Inc, value1Max)
                if(curr <= value1Max)
                    setValue1(curr)
                if(curr === value1Max)
                    clearTimeout(window.inter1)

            }, 1)
        }
    }, [visibility, value1])

    React.useEffect(()=>{
        if(visibility){
            window.inter2 = setTimeout(()=>{
                let curr = Math.min(value2 +value2Inc, value2Max)
                if(curr <= value2Max)
                    setValue2(curr)
                if(curr === value2Max)
                    clearTimeout(window.inter2)
            }, 10)
        }
    }, [visibility, value2])

    React.useEffect(()=>{
        if(visibility){
            window.inter3 = setTimeout(()=>{
                let curr = Math.min(value3 + value3Inc, value3Max)
                if(curr <= value3Max)
                    setValue3(curr)
                if(curr === value3Max)
                    clearTimeout(window.inter3)
            }, 1)
        }
    }, [visibility, value3])
    React.useEffect(()=>{
        if(visibility){
            window.inter4 = setTimeout(()=>{
                let curr = Math.min(value4 + value4Inc, value4Max)
                if(curr <= value4Max)
                    setValue4(curr)
                if(curr === value4Max)
                    clearTimeout(window.inter4)
            }, 1)
        }
    }, [visibility, value4])

    
  return (
    <div>
        <div id='statistics' className="Statistics-body row">
            <div className="col-md-6 col-12">
                <div className="statistics-left">
                    <span className="statistics1">Statistics</span>
                    
                    <span className="statistics3 statistics2 ">All the power you need,in one beautiful package.</span>
                    <p className="statistics-p">
                    It is our mission, to provide you with the highest quality trading tool on the market.
                    </p>
                  
                </div>
            </div>
            <div className="col-md-6 col-12">
                <ReactVisibilitySensor onChange={handleVisibility}>
                <div className="Statistics-right row">
                    <div className="col-lg-6 col-12 ">
                     <div className="trader-stati-box x1">
                            <h3 className='number-statistics' > {value1}</h3>
                         
                         <span className='trader-stati-text'>TRADING PAIRS</span>
                     </div>
                    </div>

                    <div className="col-lg-6 col-12">
                     <div className="trader-stati-box x2">
                         <h3 className='number-statistics' > {value2}%</h3>
                         <span className='trader-stati-text'> UPTIME BABY</span>
                     </div>
                    </div>
                    <div className="col-lg-6 col-12">
                     <div className="trader-stati-box mt-lg-5 x3">
                         
                         <h3 className='number-statistics' >{value3}+</h3>
                         <span className='trader-stati-text  '>HAPPY TRADERS </span>
                        
                     </div>
                    </div>
                    <div className="col-lg-6 col-12">
                     <div className="trader-stati-box mt-lg-5 x4">
                         <h3 className='number-statistics ' >{value4}%</h3>
                         <span className='trader-stati-text'>INDEPENDENT </span>
                      
                     </div>
                    </div>
                </div>
                </ReactVisibilitySensor>
            </div>
        </div>
    </div>
  )
}

export default Statistics