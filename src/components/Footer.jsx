import React from 'react'

function Footer() {
  return (
    <div >
      <div className="footer-body">
        <div className="container">
          <div className="logo-footer-box">
              <svg width="29" height="33" viewBox="0 0 29 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                <mask id="8nkfjxu09a" style={{maskType:"alpha"}}  maskUnits="userSpaceOnUse" x="0" y="0" width="29" height="17">
                    <path fillRule="evenodd" clipRule="evenodd" d="M0 .667h28.544v16.288H0V.668z" fill="#fff"/>
                </mask>
                <g mask="url(#8nkfjxu09a)">
                    <path fillRule="evenodd" clipRule="evenodd" d="M28.544 11.01v4.918c0 .847-1.12 1.33-1.901.818l-9.51-6.226c-1.692-1.108-4.03-1.108-5.723 0L1.9 16.746c-.78.511-1.9.03-1.9-.818v-4.934C0 9.707.698 8.495 1.884 7.72l9.527-6.224C13.104.39 15.44.39 17.131 1.498l9.532 6.242c1.185.775 1.88 1.986 1.88 3.27" fill="#fff"/>
                </g>
                <path fillRule="evenodd" clipRule="evenodd" d="M11.576 19.333v5.282c0 1.268-.74 2.461-1.998 3.222l-7.583 4.585c-.822.497-1.995.023-1.995-.806v-5.282c0-1.267.74-2.46 1.997-3.22l7.584-4.586c.822-.497 1.995-.024 1.995.805" fill="#fff"/>
                <mask id="83oyjhoinb" style={{maskType:"alpha"}} maskUnits="userSpaceOnUse" x="17" y="17" width="12" height="16">
                    <path fillRule="evenodd" clipRule="evenodd" d="M17.025 17.694h11.516v14.432H17.025V17.694z" fill="#fff"/>
                </mask>
                <g mask="url(#83oyjhoinb)">
                    <path fillRule="evenodd" clipRule="evenodd" d="M28.54 25.826v5.29c0 .83-1.148 1.304-1.953.806L18.98 27.22c-1.23-.76-1.956-1.956-1.956-3.226v-5.29c0-.83 1.15-1.304 1.954-.806l7.606 4.703c1.231.761 1.956 1.957 1.956 3.226" fill="#fff"/>
                </g>
              </svg>

              <span className="UltraTrader-text">
                UltraTrader
              </span>
            </div>
            <div className="footer-aitem">
              <div className="col-md-6 col-12">
                <div className="footer-box-left">
                  <span className="text-footer d-lg-none">The worlds first crypto trade tracking app</span>
                  <a href="mailto:email" className='d-lg-none email-trader'>hello@ultratrader.app</a>
                  <span className='copy-right'>© All rights reserved. Powered by <a href="#" className='PixiumLabs-t'>PixiumLabs</a></span>
                  
                  <div className="social-icon-aitem">
                    <a href="http://github.com" className='icon-footer'><i class="bi bi-github"></i>Github</a>
                    <a href="http://github.com" className='icon-footer'><i class="bi bi-twitter"></i>Twitter</a>
                    <a href="http://github.com" className='icon-footer'><i class="bi bi-instagram"></i>Instagram</a>
                    <a href="http://github.com" className='icon-footer'><i class="bi bi-youtube"></i>Youtube</a>

                  </div>
                
                </div>
               
              </div>
              <div className="col-md-6">
                <div className="footer-box-right">
                  <div className="Products-box">
                    <span className='Products-title'>Products</span>
                    <a href="#" className='Products-link'>Tour</a>
                    <a href="#" className='Products-link'>Costumer</a>
                    <a href="#" className='Products-link'>Pricing</a>
                    <a href="#" className='Products-link'>Integration</a>
                    <a href="#" className='Products-link'>Arrenge Demo</a>
                    <a href="#" className='Products-link'>Documentation</a>
                  </div>
                  <div className="Company-box">
                    <span className='Company-title'>Company</span>
                    <a href="#" className='Company-link'>About</a>
                    <a href="#" className='Company-link'>Blog</a>
                    <a href="#" className='Company-link'>Careers</a>
                    <a href="#" className='Company-link'>Cantact</a>
                    <a href="#" className='Company-link'>Legal</a>

                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer