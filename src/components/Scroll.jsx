import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/free-mode';
import Icon1 from '../assets/icons/Icon1';
import Icon2 from '../assets/icons/Icon2';
import Icon3 from '../assets/icons/Icon3';
import Icon4 from '../assets/icons/Icon4';
import Icon5 from '../assets/icons/Icon5';
import Icon6 from '../assets/icons/Icon6';
import Icon7 from '../assets/icons/Icon7';
import Icon8 from '../assets/icons/Icon8.jsx';
import Icon9 from '../assets/icons/Icon9';
import Icon10 from '../assets/icons/Icon10';
import Icon11 from '../assets/icons/Icon11';
import SwiperCore, { Autoplay, FreeMode  } from 'swiper';
function Scroll() {
    const [icons, setIcons] = React.useState([
        <Icon1/>,<Icon2/>,<Icon3/>,<Icon4/>,<Icon5/>,<Icon6/>,
        <Icon7/>,<Icon8/>,<Icon9/>,<Icon10/>,<Icon11/>,
    ])
    SwiperCore.use([Autoplay])
  return (
    <div>
        <div className="Scroll-body d-lg-none">
        <Swiper
            spaceBetween={50}
            slidesPerView={6}
            autoplay={{ delay: 3000 }}
            modules={[Autoplay, FreeMode ]}
            loop
            
            >
                {icons.map((item, idx)=>{
                    return <SwiperSlide key={idx}>
                            <a href="#" className='Scroll-icon'>
                                {item}
                            </a>
                        </SwiperSlide>
                })}
            
           
            </Swiper>
        </div>
    </div>
  )
}

export default Scroll