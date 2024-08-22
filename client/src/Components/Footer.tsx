import React from 'react';

const Footer = () => {
  return (
    <>
      <footer className='py-5'>
        <div className="container py-md-3">
          <div className="row">
            <div className="col-md-4 pt-lg-4 mb-md-0 mb-4">
                <div className='text-center text-md-start'><img src="assets/logo.png" className='footer-logo' alt="" /></div>
              <div className="d-flex align-items-center justify-content-md-start justify-content-center gap-3 mt-4 mb-md-0 mb-2">
                {/* <a href="javascript:void(0)" className='social-link'><img src="assets/fb.svg" alt="" /></a> */}
                <a href="https://x.com/BitGreek" target={"_blank"} className='social-link'><img src="assets/x.svg" alt="" /></a>
                <a href="javascript:void(0)" className='social-link'><img src="assets/insta.svg" alt="" /></a>
                {/* <a href="javascript:void(0)" className='social-link'><img src="assets/in.svg" alt="" /></a> */}
              </div>
            </div>
            <div className="col-md-2 col-5">
              <h5>Quick Links</h5>
              <ul>
                <li><a href="#home" className=''>Home </a></li>
                <li><a href="#news" className=''>News</a></li>
                <li><a href="#prices" className=''>Prices</a></li>
                <li><a href="#contact" className=''>Contact </a></li>
                <li><a href="javascript:void(0)" className=''>Privacy Policy</a></li>
                <li><a href="javascript:void(0)" className=''>Terms of Services</a></li>

              </ul>
            </div>
            <div className="col-md-3 col-7" id='contact'>
              <h5>Contact US</h5>
              <ul>
                {/* <li><a href="javascript:void(0)" className=''>1 Mayfair, London,
                W1 7BG </a></li> */}
                {/* <li><a href="javascript:void(0)" className=''>Need help? Call us</a></li> */}
                {/* <li><a href="tel:(+000) 32 5555 4444" className=''><b>(+000) 32 5555 4444</b></a></li> */}
                <li><a href="mailto:info@bitgreek.com" className=''>info@bitgreek.com </a></li>

              </ul>
            </div>

            <div className="col-md-3 mt-md-0 mt-4">
                <h5>DOWNLOAD tHE APP</h5>
              <p className='mb-4'>We suggest connecting to the apps you use for work</p>

              <div className="d-flex align-items-center gap-3">
                <a href="javascript:void(0)" className='social-link'><img src="assets/appStore.svg" className='w-100' alt="" /></a>
                <a href="javascript:void(0)" className='social-link'><img src="assets/Gplay.svg" className='w-100' alt="" /></a>
                </div>

            </div>
          </div>
        </div>
      </footer>
      <div className="container sub-footer">
      Copyright © 2024. All Rights Reserved.
      </div>
    </>
  );
};

export default Footer;
