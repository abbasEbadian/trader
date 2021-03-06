import React from 'react'

import gsap from 'gsap'
import {ScrollTrigger} from 'gsap/all'

function WhatWeDo() {
  gsap.registerPlugin(ScrollTrigger)


  React.useEffect(()=>{
    gsap.fromTo('span.whatwedo', {opacity: 0, y: 35}, {opacity: 1, y: 0, duration: 0.4, scrollTrigger:'span.whatwedo'})
    gsap.fromTo('p.wedo-dec', {opacity: 0, y: 35}, {opacity: 1, y: 0, duration: 0.4,delay:0.4, scrollTrigger:'p.wedo-dec'})
    if (window.innerWidth > 768){
      gsap.fromTo('.wedo-aitem-box > div', {opacity: 0, y: 35}, {opacity: 1, y: 0, delay: 0.2,duration: 0.4, stagger:{amount:0.8}, scrollTrigger: `.wedo-aitem-box > div:nth-of-type(${6})`})
    }else{
      gsap.fromTo(`.wedo-aitem-box > div`, {opacity: 0, y: 35}, {opacity: 1, y: 0, delay: 0.2,duration: 0.4, stagger:{amount:0.8}, scrollTrigger: `.wedo-aitem-box > div:nth-of-type(${3})`})
    }
    gsap.fromTo('.accordion-container [class*=col]', {opacity: 0, y: 35}, {opacity: 1, y: 0, delay: 0.5,duration: 0.4, stagger:{amount:0.4}, scrollTrigger:'div.accordion-container '})
    gsap.fromTo('span.How-its-done', {opacity: 0, y: 35}, {opacity: 1, y: 0, duration: 0.4, scrollTrigger:'span.How-its-done'})
    gsap.fromTo('.Accordion-mobile .step1', {opacity: 0, y: 35}, {opacity: 1, y: 0, duration: 0.4, delay:0.2, scrollTrigger:'.Accordion-mobile .step1'})
    gsap.fromTo('.Accordion-mobile .step2', {opacity: 0, y: 35}, {opacity: 1, y: 0, duration: 0.4, delay:0.2, scrollTrigger:'.Accordion-mobile .step2'})
    gsap.fromTo('.Accordion-mobile .step3', {opacity: 0, y: 35}, {opacity: 1, y: 0, duration: 0.4, delay:0.2, scrollTrigger:'.Accordion-mobile .step3'})
    gsap.fromTo('Scroll-body', {opacity: 0, y: 35}, {opacity: 1, y: 0, duration: 0.4, delay:0.2, scrollTrigger:'Scroll-body'})

  }, [])
    
  
  return (
    <div>
        <div className='whatwedo-box'>
          <div className='text-wedo-box'>
                <span className='whatwedo'>What we do</span>
                <p className='wedo-dec'>We’re giving traders the tools they need
                    to perfect their trading strategies.
                </p>
                  
                
          </div>
          <div className='wedo-aitem-box'>
              <div className='col-lg-4 col-12'>
                  <div className='wedo-aitem'>
                      <svg width="69" height="69" viewBox="0 0 58 58" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M29.04 46.301c-4.012 0-7.9-1.391-11-3.938a1.314 1.314 0 1 1 1.666-2.022A14.676 14.676 0 1 0 15.27 24.13a1.312 1.312 0 0 1-1.68.801 1.313 1.313 0 0 1-.8-1.667 17.301 17.301 0 1 1 16.25 23.038z" fill="#7B48FB"/>
                        <path d="M29.052 39.291a10.331 10.331 0 0 1-5.093-1.312 1.318 1.318 0 0 1 1.313-2.284 7.653 7.653 0 1 0-2.94-10.305 1.313 1.313 0 0 1-2.311-1.247 10.278 10.278 0 1 1 9.031 15.148zM5.752 31.756a3.846 3.846 0 0 1-3.833 3.847 3.846 3.846 0 0 1 3.833 3.846 3.846 3.846 0 0 1 3.846-3.846 3.846 3.846 0 0 1-3.846-3.847zM7.392 24.379a2.113 2.113 0 0 1-2.1 2.113 2.1 2.1 0 0 1 2.1 2.1 2.1 2.1 0 0 1 2.1-2.1 2.114 2.114 0 0 1-2.1-2.113z" fill="#7B48FB"/>
                        <path d="m14.993 37.1 13.403-7.234a.723.723 0 0 0-.472-1.313l-15.28 1.274a1.76 1.76 0 0 0-1.523 2.31l1.155 4.056a1.798 1.798 0 0 0 2.717.906zM44.45 28.173a3.268 3.268 0 1 1 3.256-3.269 3.282 3.282 0 0 1-3.255 3.269zm0-3.938a.643.643 0 1 0 .63.63.644.644 0 0 0-.63-.59v-.04zM32.006 47.968a3.268 3.268 0 1 1-.026-6.536 3.268 3.268 0 0 1 .026 6.536zm0-3.938a.643.643 0 1 0 .63.63.63.63 0 0 0-.63-.59v-.04zM31.336 23.736a3.269 3.269 0 1 1 3.256-3.216 3.256 3.256 0 0 1-3.256 3.216zm0-3.938a.644.644 0 1 0 .63.643.63.63 0 0 0-.63-.604v-.04z" fill="#7B48FB"/>
                      </svg>
                      <span className='wedo-title moblie-wedo'>One stop tracking</span>
                      <span className='wedo-title d-lg-none'>All your trades in one</span>
                      <span className='wedo-text moblie-wedo'>We track your trade setups in real time.</span>
                      <span className='wedo-text d-lg-none'>Track all your setups from different exchanges.</span>
                      
                  </div>
              </div>
              <div className='col-lg-4 col-12'>
                  <div className='wedo-aitem'>
                  <svg width="69" height="69" viewBox="0 0 58 58" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M41.76 30.037a7.075 7.075 0 1 0 6.997 7.076 7.037 7.037 0 0 0-6.997-7.076zm.696 10.397c0 .446-.21.814-.46.853a2.46 2.46 0 0 1-.63 0c-.263 0-.46-.394-.473-.84-.013-.447 0-1.195 0-2.009v-1.903c0-.446.21-.8.473-.84.204-.034.413-.034.617 0 .262 0 .46.394.473.84.013.446 0 1.22 0 2.074.039.578.013 1.195 0 1.825zm-.775-5.606a.957.957 0 0 1-.971-.958.97.97 0 1 1 1.93 0 .958.958 0 0 1-.959.958zM23.985 25.154a2.625 2.625 0 0 0-2.625 2.625 2.625 2.625 0 0 0-2.626-2.625 2.625 2.625 0 0 0 2.626-2.626 2.625 2.625 0 0 0 2.625 2.626zM21.32 19.863a6.036 6.036 0 0 0-6.051 6.026 6.038 6.038 0 0 0-6.039-6.026 6.038 6.038 0 0 0 6.039-6.038 6.04 6.04 0 0 0 6.051 6.038zM46.905 18.866H29.25a1.313 1.313 0 0 1 0-2.626h17.656a1.313 1.313 0 0 1 0 2.626zM46.905 25.836H29.25a1.313 1.313 0 0 1 0-2.625h17.656a1.313 1.313 0 0 1 0 2.625zM29.433 34.841H11.778a1.313 1.313 0 0 1 0-2.625h17.655a1.313 1.313 0 0 1 0 2.625zM29.433 41.812H11.778a1.313 1.313 0 0 1 0-2.625h17.655a1.313 1.313 0 0 1 0 2.625z" fill="#3887FA"/>
                  </svg>

                    <span className='wedo-title moblie-wedo'>On-time notifications</span>
                    <span className='wedo-text moblie-wedo'>It notifyes you when you hit your targets.</span>

                    <span className='wedo-title d-lg-none'>Detailed setup info</span>
                    <span className='wedo-text d-lg-none'>Never forget your entry, target and stoploss.</span>
                      
                  </div>
              </div>
              <div className='col-lg-4 col-12'>
                  <div className='wedo-aitem'>
                        <svg width="69" height="69" viewBox="0 0 58 58" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14.52 39.383v.158a2.258 2.258 0 0 1-.131-.84c.012.232.056.462.131.682zM16.043 36.102a10.278 10.278 0 0 0 1.602-2.166 9.072 9.072 0 0 1-1.602 2.166zM40.21 33.07a9.515 9.515 0 0 1-.748-3.177c.105.63.184 1.247.328 1.85.19.756.468 1.488.827 2.18a2.213 2.213 0 0 1-.407-.854zM43.65 39.541a2.626 2.626 0 0 1-2.52 1.759h-.342a3.69 3.69 0 0 0 1.313-.236 2.52 2.52 0 0 0 1.549-1.523zM43.794 38.661a2.627 2.627 0 0 0-.88-1.837l-.722-.683.539.499a2.625 2.625 0 0 1 1.063 2.021z" fill="#828CA2"/>
                            <path d="M24.616 43.755h9.03a.789.789 0 0 1 .75 1.076 6.144 6.144 0 0 1-4.832 3.44 5.75 5.75 0 0 1-5.697-3.453.788.788 0 0 1 .748-1.063zM29.105 17.514H29.71c.444.03.884.104 1.313.223a7.6 7.6 0 0 1 5.71 7.47v4.804c.086 1.388.41 2.751.958 4.03.147.365.318.72.512 1.063a11.482 11.482 0 0 0 2.061 2.81l.722.708h-23.8c.263-.236.5-.472.697-.67a12.024 12.024 0 0 0 2.008-2.717c.197-.354.367-.735.538-1.115.538-1.282.857-2.644.945-4.03v-4.858a7.627 7.627 0 0 1 5.71-7.469c.396-.11.8-.185 1.208-.223h.722l.092-.026zm-.092-2.6h-.827a8.695 8.695 0 0 0-1.811.303 10.253 10.253 0 0 0-7.627 10.002v4.66A9.518 9.518 0 0 1 18 33.056a6.564 6.564 0 0 1-.42.867 9.071 9.071 0 0 1-1.602 2.166 9.119 9.119 0 0 1-.722.695 2.624 2.624 0 0 0-.866 1.838c-.001.23.03.46.092.683v.157a2.547 2.547 0 0 0 1.496 1.523c.44.164.908.245 1.378.236h23.432a3.69 3.69 0 0 0 1.313-.236 2.522 2.522 0 0 0 1.496-1.523.472.472 0 0 0 0-.144 3.15 3.15 0 0 0 .092-.683 2.623 2.623 0 0 0-.88-1.838l-.721-.682a9.546 9.546 0 0 1-1.641-2.206c-.145-.275-.276-.564-.407-.853a9.516 9.516 0 0 1-.748-3.177v-4.66a10.253 10.253 0 0 0-7.548-9.95 8.44 8.44 0 0 0-1.799-.302h-.84l-.092-.052zM21.911 12.643a3.244 3.244 0 0 0-3.242 3.256 3.256 3.256 0 0 0-3.256-3.256 3.242 3.242 0 0 0 3.256-3.242 3.228 3.228 0 0 0 3.242 3.242zM16.319 18.747a2.166 2.166 0 0 0-2.166 2.153A2.153 2.153 0 0 0 12 18.748a2.14 2.14 0 0 0 2.153-2.167 2.153 2.153 0 0 0 2.166 2.166zM42.442 20.165a1.313 1.313 0 0 1-1.313-1.037c-.682-3.15-4.227-4.988-4.253-5.014a1.313 1.313 0 0 1 1.182-2.337c.197.092 4.686 2.416 5.631 6.8a1.311 1.311 0 0 1-1.01 1.562l-.237.026z" fill="#46D1FD"/>
                            <path d="M28.067 35.524v-.564c0-.184 0-.17-.157-.184-.42 0-.827-.079-1.234-.158a8.533 8.533 0 0 1-1.129-.328.735.735 0 0 1-.486-.892c.041-.246.103-.487.184-.722a.762.762 0 0 1 .985-.486 7.95 7.95 0 0 0 1.628.394c.628.1 1.271.012 1.85-.25a1.01 1.01 0 0 0 .276-1.64 2.956 2.956 0 0 0-1.116-.67c-.394-.158-.814-.289-1.207-.46a4.883 4.883 0 0 1-2.114-1.391 2.756 2.756 0 0 1-.564-2.192 3.216 3.216 0 0 1 2.284-2.626c.24-.086.486-.156.735-.21.131 0 .157-.091.157-.21v-1.102a.447.447 0 0 1 .512-.512h.801a.434.434 0 0 1 .499.472v1.024c0 .131 0 .17.17.17.61.03 1.214.131 1.799.303a.812.812 0 0 1 .578 1.024c0 .157-.08.328-.132.485a.774.774 0 0 1-1.037.565 6.567 6.567 0 0 0-1.811-.302 2.259 2.259 0 0 0-1.208.262.854.854 0 0 0-.118 1.431 3.7 3.7 0 0 0 1.103.63c.708.302 1.43.578 2.1.92a2.993 2.993 0 0 1 1.64 1.771 3.321 3.321 0 0 1-1.18 3.781c-.53.384-1.141.64-1.786.748a.211.211 0 0 0-.19.151.209.209 0 0 0-.007.086v1.168c0 .38-.131.525-.512.525h-.8a.433.433 0 0 1-.5-.499l-.012-.512z" fill="#46D1FD"/>
                        </svg>

                        <span className='wedo-title moblie-wedo'>Deep analysis</span>
                        <span className='wedo-text moblie-wedo'>It analyses all your trades
                        for you.</span>

                       
                        <span className='wedo-title d-lg-none'>Instant notifications</span>
                        <span className='wedo-text d-lg-none'>We rapidly check the prices so you don’t have to.</span>
                      
                  </div>
              </div>
              <div className='col-lg-4 col-12'>
                  <div className='wedo-aitem'>
                  <svg width="69" height="69" viewBox="0 0 58 58" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M33.3057 25.2584C34.5527 25.2584 35.5636 24.2475 35.5636 23.0005C35.5636 21.7536 34.5527 20.7427 33.3057 20.7427C32.0587 20.7427 31.0479 21.7536 31.0479 23.0005C31.0479 24.2475 32.0587 25.2584 33.3057 25.2584Z" fill="#4AFDA5"/>
                    <path d="M24.5362 31.2184C25.7832 31.2184 26.794 30.2075 26.794 28.9605C26.794 27.7135 25.7832 26.7026 24.5362 26.7026C23.2892 26.7026 22.2783 27.7135 22.2783 28.9605C22.2783 30.2075 23.2892 31.2184 24.5362 31.2184Z" fill="#4AFDA5"/>
                    <path d="M15.6758 24.8121C16.9228 24.8121 17.9337 23.8012 17.9337 22.5542C17.9337 21.3073 16.9228 20.2964 15.6758 20.2964C14.4288 20.2964 13.418 21.3073 13.418 22.5542C13.418 23.8012 14.4288 24.8121 15.6758 24.8121Z" fill="#4AFDA5"/>
                    <path d="M24.5101 29.7614L15.2949 23.0797L16.0694 22.0164L24.5495 28.1599L41.9692 16.4111L42.7043 17.5007L24.5101 29.7614Z" fill="#4AFDA5"/>
                    <path d="M47.378 16.4501C46.0295 16.4501 44.7359 16.9849 43.7811 17.9373C42.8263 18.8896 42.2882 20.1818 42.2847 21.5303C42.2812 20.1818 41.7431 18.8896 40.7883 17.9373C39.8335 16.9849 38.54 16.4501 37.1914 16.4501C37.8625 16.4501 38.5269 16.3175 39.1466 16.0599C39.7663 15.8023 40.3289 15.4248 40.8022 14.9491C41.2755 14.4733 41.6502 13.9087 41.9046 13.2878C42.159 12.6668 42.2882 12.0016 42.2847 11.3306C42.2813 12.0016 42.4104 12.6668 42.6649 13.2878C42.9193 13.9087 43.2939 14.4733 43.7672 14.9491C44.2405 15.4248 44.8032 15.8023 45.4228 16.0599C46.0425 16.3175 46.7069 16.4501 47.378 16.4501V16.4501Z" fill="#4AFDA5"/>
                    <path d="M42.3109 46.6427C42.0949 46.6444 41.8807 46.6032 41.6809 46.5213C41.481 46.4395 41.2994 46.3187 41.1467 46.166C40.994 46.0132 40.8732 45.8316 40.7913 45.6318C40.7095 45.4319 40.6682 45.2177 40.67 45.0018V25.9544C40.67 25.5192 40.8429 25.1018 41.1506 24.7941C41.4583 24.4864 41.8757 24.3135 42.3109 24.3135C42.7461 24.3135 43.1634 24.4864 43.4711 24.7941C43.7789 25.1018 43.9517 25.5192 43.9517 25.9544V45.0018C43.9535 45.2177 43.9122 45.4319 43.8304 45.6318C43.7486 45.8316 43.6278 46.0132 43.475 46.166C43.3223 46.3187 43.1407 46.4395 42.9409 46.5213C42.741 46.6032 42.5268 46.6444 42.3109 46.6427V46.6427Z" fill="#4AFDA5"/>
                    <path d="M33.4105 46.6425C33.1945 46.6442 32.9803 46.603 32.7805 46.5211C32.5806 46.4393 32.399 46.3185 32.2463 46.1657C32.0936 46.013 31.9728 45.8314 31.8909 45.6316C31.8091 45.4317 31.7678 45.2175 31.7696 45.0016V31.1262C31.7696 30.691 31.9425 30.2737 32.2502 29.966C32.5579 29.6582 32.9753 29.4854 33.4105 29.4854C33.8457 29.4854 34.263 29.6582 34.5708 29.966C34.8785 30.2737 35.0514 30.691 35.0514 31.1262V45.0016C35.0531 45.2175 35.0119 45.4317 34.93 45.6316C34.8482 45.8314 34.7274 46.013 34.5747 46.1657C34.4219 46.3185 34.2403 46.4393 34.0405 46.5211C33.8406 46.603 33.6264 46.6442 33.4105 46.6425V46.6425Z" fill="#4AFDA5"/>
                    <path d="M24.5892 46.6424C24.3732 46.6442 24.159 46.6029 23.9592 46.5211C23.7593 46.4392 23.5777 46.3184 23.425 46.1657C23.2723 46.013 23.1515 45.8314 23.0696 45.6315C22.9878 45.4317 22.9465 45.2175 22.9483 45.0015V37.2434C22.9483 36.8082 23.1212 36.3909 23.4289 36.0831C23.7366 35.7754 24.154 35.6025 24.5892 35.6025C25.0244 35.6025 25.4417 35.7754 25.7495 36.0831C26.0572 36.3909 26.2301 36.8082 26.2301 37.2434V45.0015C26.2318 45.2175 26.1906 45.4317 26.1087 45.6315C26.0269 45.8314 25.9061 46.013 25.7534 46.1657C25.6006 46.3184 25.4191 46.4392 25.2192 46.5211C25.0193 46.6029 24.8052 46.6442 24.5892 46.6424V46.6424Z" fill="#4AFDA5"/>
                    <path d="M15.6233 46.6425C15.4051 46.6478 15.1881 46.6091 14.9852 46.5289C14.7822 46.4486 14.5975 46.3284 14.442 46.1753C14.2865 46.0222 14.1633 45.8394 14.0798 45.6378C13.9964 45.4362 13.9543 45.2198 13.9561 45.0016V30.5618C13.9561 30.1266 14.129 29.7092 14.4367 29.4015C14.7444 29.0938 15.1618 28.9209 15.597 28.9209C16.0322 28.9209 16.4496 29.0938 16.7573 29.4015C17.065 29.7092 17.2379 30.1266 17.2379 30.5618V45.0016C17.2396 45.2153 17.1992 45.4274 17.119 45.6255C17.0388 45.8237 16.9204 46.0041 16.7704 46.1564C16.6205 46.3088 16.442 46.4302 16.2452 46.5136C16.0483 46.597 15.837 46.6408 15.6233 46.6425V46.6425Z" fill="#4AFDA5"/>
                  </svg>


                  <span className='wedo-title moblie-wedo'>Secure Encryption</span>
                  <span className='wedo-text moblie-wedo'>We track your trade setups
                  in real time.</span>
                      

                      
                  <span className='wedo-title d-lg-none'>Deep analysis</span>
                  <span className='wedo-text d-lg-none'>Analyze your record and test your strategy.</span>
                  </div>
              </div>
              <div className='col-lg-4 col-12'>
                  <div className='wedo-aitem'>
                  <svg width="69" height="69" viewBox="0 0 58 58" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M36.106 42.38a1.315 1.315 0 1 1-.157-2.625 10.223 10.223 0 0 0 8.845-8.846 54.896 54.896 0 0 0-.157-14.252 9.83 9.83 0 0 0-8.373-8.36 36.957 36.957 0 0 0-10.933-.158 1.313 1.313 0 0 1-.813-2.48c.204-.085.422-.134.643-.145a39.595 39.595 0 0 1 11.457.171 12.52 12.52 0 0 1 10.63 10.63c.693 4.952.745 9.971.158 14.936A12.901 12.901 0 0 1 36.264 42.38h-.158zM21.526 42.222h-.184a12.48 12.48 0 0 1-10.63-10.617 48.726 48.726 0 0 1-.276-12.192 1.312 1.312 0 0 1 2.612.249 46.023 46.023 0 0 0 .262 11.588 9.856 9.856 0 0 0 8.387 8.374 1.312 1.312 0 0 1 1.115 1.483 1.313 1.313 0 0 1-1.286 1.115z" fill="#FD8347"/>
                      <path d="M23.298 18.1c-2.625 2.625-8.846 1.614-11.563 1.418 0-.38.08-.762.119-1.168.34-2.98 9.974-11.09 13.229-11.51 0 3.176.446 9.042-1.785 11.26z" fill="#FD8347"/>
                      <path d="M17.011 21.184c-1.522 0-2.979-.13-4.16-.249l-1.208-.105-1.312-.092.092-1.312V18.23c.42-3.674 10.657-12.205 14.436-12.69l1.47-.184v2.795c0 3.596.131 8.531-2.192 10.854-1.64 1.759-4.462 2.178-7.126 2.178zm-3.819-2.847c2.625.249 7.363.656 9.187-1.155 1.457-1.444 1.457-5.696 1.417-8.492-3.543 1.785-10.026 7.534-10.604 9.647zM28.993 52.813a1.312 1.312 0 0 1-1.312-1.312V34.44a1.312 1.312 0 1 1 2.624 0V51.5a1.312 1.312 0 0 1-1.312 1.313z" fill="#FD8347"/>
                      <path d="M28.954 52.813a1.311 1.311 0 0 1-.932-.393l-4.436-4.436a1.312 1.312 0 0 1 1.85-1.85l3.518 3.503 3.583-3.583a1.313 1.313 0 1 1 1.85 1.85l-4.515 4.516a1.312 1.312 0 0 1-.918.393zM40.976 17.418a5.25 5.25 0 0 0-5.25 5.184 5.25 5.25 0 0 0-5.25-5.184 5.25 5.25 0 0 0 5.25-5.25 5.25 5.25 0 0 0 5.25 5.25zM34.099 24.78a3.518 3.518 0 0 0-3.518 3.518 3.517 3.517 0 0 0-3.504-3.518 3.517 3.517 0 0 0 3.517-3.517A3.517 3.517 0 0 0 34.1 24.78z" fill="#FD8347"/>
                  </svg>
                  <span className='wedo-title moblie-wedo'>Detailed trade info</span>
                  <span className='wedo-text moblie-wedo'>It notifyes you when you hit your targets.</span>

                  <span className='wedo-title d-lg-none'>Easy export for tax report</span>
                  <span className='wedo-text d-lg-none'>CSV file that puts a smile on your accountants face.</span>
                      
                  </div>
              </div>
              <div className='col-lg-4 col-12'>
                  <div className='wedo-aitem'>
                  <svg width="58" height="58" viewBox="0 0 58 58" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M43.347 14.73A49.256 49.256 0 0 1 30.05 9.192a1.917 1.917 0 0 0-1.011-.289 1.97 1.97 0 0 0-1.063.315 45.602 45.602 0 0 1-13.285 5.487 2.009 2.009 0 0 0-1.562 1.943v11.578a19.442 19.442 0 0 0 8.27 15.924l6.445 4.555c.338.24.742.368 1.156.367.41.003.81-.126 1.142-.367l6.445-4.555a19.415 19.415 0 0 0 8.283-15.95V16.66a1.996 1.996 0 0 0-1.523-1.93zm-1.102 13.495a16.869 16.869 0 0 1-7.168 13.81L29 46.328l-6.091-4.306a16.854 16.854 0 0 1-7.155-13.797V17.146a48.425 48.425 0 0 0 13.285-5.5 52.81 52.81 0 0 0 13.206 5.526v11.053z" fill="#EF5144"/>
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M35.038 26.69h-.761v-2.232a5.25 5.25 0 0 0-6.328-5.251 5.434 5.434 0 0 0-4.24 5.382v2.1h-.748a1.523 1.523 0 0 0-1.51 1.523v1.995A7.876 7.876 0 0 0 29 38.15a7.876 7.876 0 0 0 7.548-7.942v-1.995a1.523 1.523 0 0 0-1.51-1.523zm-9.058-2.1a3.124 3.124 0 0 1 2.508-3.138 3.02 3.02 0 0 1 3.53 3.006v2.231H25.98v-2.1zm6.498 6.563-3.662 3.662a1.311 1.311 0 0 1-.932.38 1.313 1.313 0 0 1-.92-.38l-1.89-1.825a1.312 1.312 0 1 1 1.865-1.85l.945.945 2.73-2.73a1.312 1.312 0 0 1 1.864 0 1.313 1.313 0 0 1 0 1.85v-.052z" fill="#EF5144"/>
                      <path d="M18.17 7.051a4.896 4.896 0 0 0-4.897 4.896 4.895 4.895 0 0 0-4.896-4.896 4.897 4.897 0 0 0 4.896-4.91 4.895 4.895 0 0 0 4.897 4.91zM10.32 17.094a3.321 3.321 0 0 0-3.321 3.308 3.308 3.308 0 0 0-3.321-3.308 3.334 3.334 0 0 0 3.32-3.335 3.334 3.334 0 0 0 3.322 3.335z" fill="#EF5144"/>
                  </svg>

                  <span className='wedo-title d-lg-none'>Secure by default</span>
                  <span className='wedo-text d-lg-none' >All your data is encrypted on our secure servers.</span>

                  
                  <span className='wedo-title moblie-wedo '>Beautiful interface</span>
                  <span className='wedo-text moblie-wedo'>It analyses all your trades
                  for you.</span>
                      
                  </div>
              </div>
              
          </div>
            
        </div>
    </div>
  )
}

export default WhatWeDo