import React from 'react'
import chart from '../assets/img/chart.png'
import chart1 from '../assets/img/1-chart.png'
import chart2 from '../assets/img/2-chart.png'
import chart3 from '../assets/img/3-chart.png'
function Chart() {
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