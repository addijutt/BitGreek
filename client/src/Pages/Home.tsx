import React, { useEffect } from 'react';

import Aos from 'aos';
import 'aos/dist/aos.css';
import {useLocation } from 'react-router-dom';
import CoinMarketCapData from './CoinMarketCapData';
import LatestArticles from './LatestArticles';

const Home = () => {

  useEffect(function () {
    Aos.init({ disable: 'mobile' });
  }, []);

  const location = useLocation();

  // useEffect(() => {
  // window.scrollTo(0, 0);
  // }, [location]);

  return (
    <>
      {/* Banner */}
      <div className="bg-grad">
        <section className="banner" id="home">
          <div className="container">
            <div className="row align-items-center text-md-start text-center">
              <div className="col-md-6 mb-md-0 mb-4" data-aos="fade-up" data-aos-duration="1800">
                <h1 className="mb-3">Simplify  <span>Crypto</span> </h1>
                {/* <p className="mb-4 px-md-0 px-4">
                The simple, safe and fun way to start your crypto journey!
                </p>
                <div className="d-flex flex-md-row flex-column gap-3 mb-lg-5 mb-4">
                <a href="javascript:void(0)" className='secondary-btn'>Get Started</a>
                </div> */}
                
              </div>

              <div className="col-md-6 col-9 mx-auto mb-md-0 mb-4" data-aos="fade-up" data-aos-duration="1800">
                <img src="assets/banner.png" className='w-100' alt="" />
              </div>
              
            </div>
          </div>
        </section>

        <section>
          <div className="container pb-lg-5">
            <div className="divider"><img src="assets/divide.png" className='w-100' alt="" /></div>

            <div className="screenshot py-md-5 py-3" id='prices'>
              {/* <img src="assets/ss.png" className='w-100' alt="" /> */}
              <CoinMarketCapData />
              </div>
          </div>
        </section>
        
        </div>


        <section className='bg-white pb-5'>
          <div className="container">
            <div className="row pt-5 justify-content-center">
              <div className="col-md-12">
              <div className="col-md-8 mx-auto mb-4 mb-lg-5 text-center mb-3"  data-aos="zoom-in" data-aos-duration="1800">
                <h2 className='mb-3 dark-text'><span>Bitgreek.com</span> Vision</h2>
                <p className='dark-text'>Why is crypto so hard? Bitgreek.com was born to make a safe, 
                  simple and fun place to build your crypto fortune.</p>
              </div>
              </div>
              <div className="col-md-3 mb-4">
                  <div className="dex-card"  data-aos="fade-left" data-aos-duration="1800">
                    <h5 className='mb-4'>Swap Crypto</h5>
                    <div className="text-center my-3"><img src="assets/w1.svg" height={130} alt="" /></div>
                    <p className='mb-0'>Easily swap between any of the available cryptos with low fees and fast transactions. 
                      Play smart and easily reposition your portfolio to take advantage of the latest 
                      crypto trends and market movements.</p>
                  </div>
              </div>

              <div className="col-md-3 mb-4">
                  <div className="dex-card b1"  data-aos="fade-left" data-aos-duration="1800">
                    <h5 className='mb-4'>Stake Crypto</h5>
                    <div className="text-center my-3"><img src="assets/w2.svg" height={130} alt="" /></div>
                    <p className='mb-0'>Don’t let your crypto sit idle! Put it to work with staking, where you 
                      earn a passive income yield on your crypto. Let us do the hard work and you just simply 
                      enable staking on any of your cryptos where staking is available.</p>
                  </div>
              </div>

              <div className="col-md-3 mb-4">
                  <div className="dex-card b2"  data-aos="fade-left" data-aos-duration="1800">
                    <h5 className='mb-4'>Claim Airdrops</h5>
                    <div className="text-center my-3"><img src="assets/w3.svg" height={130} alt="" /></div>
                    <p className='mb-0'>Want to earn airdrops but don’t want to take the risk or the hassle of claiming your airdrops, 
                      then our airdrops solution is exactly what you need. Simply enable the airdrops option on any of your 
                      cryptos where airdrops are available and let us do the rest. Simply watch airdrops magically appear in your portfolio. Ouila!</p>
                  </div>
              </div>

              {/* <div className="col-md-3 mb-4">
                  <div className="dex-card b1"  data-aos="fade-left" data-aos-duration="1800">
                    <h5 className='mb-4'>Earn BTG Tokens</h5>
                    <div className="text-center my-3"><img src="assets/w4.svg" height={130} alt="" /></div>
                    <p className='mb-0'>We sincerely value each and every one of our customers and our goal is 
                      help you build your crypto portfolio in a safe and secure platform. As you use the platform, 
                      earn BTG tokens as part of the Bitgreek.com airdrop program.</p>
                  </div>
              </div> */}
              
            </div>
          </div>
          {/* <div className="big-img">
            <img src="assets/bg1.png" className='w-100' alt="" />
          </div> */}
        </section>

        {/* <section>
          <div className="container">
            <div className="row align-items-center pt-5 pb-md-5">
              <div className="col-md-6">
              <h2 className='mb-3 text-white text-center text-md-start'><span>Bitgreek</span> App</h2>
                <p className='text-white text-center text-md-start'>Built with the latest web3 technology, the Bitgreek.com App allows 
                  easy access to the cryptocurrencies in a safe and simple way. Access swaps, 
                  staking and airdrops in one easy-to-use interface.</p>
                  <div className="d-flex flex-md-row flex-column gap-3">
                <a href="javascript:void(0)" className='primary-btn'>Geting Started</a>
                <a href="javascript:void(0)" className='secondary-btn'>Get Started</a>
                </div>
              </div>
              <div className="col-md-6">
                <img src="assets/s11.png" className='w-100' alt="" />
              </div>
            </div>
          </div>
          <div className="bg-white py-lg-4 text-center text-md-start">
          <div className="container">
            <div className="row align-items-center justify-content-between py-5">
              <div className="col-md-5 ">
              <h2 className='mb-3 dark-text'>Philosophy</h2>
                <p className='dark-text'>Bitgreek.com is founded on the basis of providing a simple, safe and fun way to enter 
                  cryptocurrencies. Crypto should be easy, safe and fun and we are making that happen.</p>
                  
              </div>
              <div className="col-md-6">
              <div className="col-md-6 col-8 mx-auto">
                <img src="assets/s2.png" className='w-100' alt="" />
              </div>
              </div>
            </div>
          </div>
          </div>
        </section> */}

        <section className='py-lg-4 light-bg text-center text-md-start'>
          <div className="container">
            <div className="row align-items-center justify-content-between py-5">
            <div className="col-md-5 order-md-0 order-1">
              <div className="col-md-9 col-9 mx-auto">
                <img src="assets/s3.png" className='w-100' alt="" />
              </div>
              </div>
              <div className="col-md-6">
              <h2 className='mb-3 dark-text'>Crypto <span>Rookie</span>?</h2>
                <p className='dark-text'>Bitgreek.com is specifically designed for crypto rookies to learn, earn and grow their crypto in a safe, simple and secure way!</p>
                  
              </div>
              
            </div>
          </div>
        </section>


        <section className='bg-white py-5'>
          <div className="container" id='news'>
          <div className="text-center dark-text mb-4 mb-lg-5">
            <h2><span>Crypto</span> News</h2>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-9">
              <LatestArticles />
              {/* <div className="news-card">
              <div className="row justify-content-between">
                <div className="col-8">
                  <h6 className='mb-4'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum</h6>
                  <div className="d-flex align-items-center gap-2">
                    <div className="tag"><img src="assets/eth.svg" alt="" /> eth </div> <p className='mb-0'> . UltraMining . 23min ago</p>
                  </div>
                </div>
                <div className="col-md-3 col-4">
                  <img src="assets/n1.png" className='w-100' alt="" />
                </div>
              </div>
              </div> */}

              {/* <div className="news-card">
              <div className="row justify-content-between">
                <div className="col-8">
                  <h6 className='mb-4'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum</h6>
                  <div className="d-flex align-items-center gap-2">
                    <div className="tag"><img src="assets/eth.svg" alt="" /> eth </div> <p className='mb-0'> . UltraMining . 23min ago</p>
                  </div>
                </div>
                <div className="col-md-3 col-4">
                  <img src="assets/n2.png" className='w-100' alt="" />
                </div>
              </div>
              </div>

              <div className="news-card">
              <div className="row justify-content-between">
                <div className="col-8">
                  <h6 className='mb-4'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum</h6>
                  <div className="d-flex align-items-center gap-2">
                    <div className="tag"><img src="assets/shiba.svg" alt="" /> shiba </div> <p className='mb-0'> . Crypto Intelligence News . 29min ago</p>
                  </div>
                </div>
                <div className="col-md-3 col-4">
                  <img src="assets/n3.png" className='w-100' alt="" />
                </div>
              </div>
              </div>

              <div className="news-card">
              <div className="row justify-content-between">
                <div className="col-8">
                  <h6 className='mb-4'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum</h6>
                  <div className="d-flex align-items-center gap-2">
                    <div className="tag"><img src="assets/btc.svg" alt="" /> btc </div> <p className='mb-0'> . UltraMining . 23min ago</p>
                  </div>
                </div>
                <div className="col-md-3 col-4">
                  <img src="assets/n4.png" className='w-100' alt="" />
                </div>
              </div>
              </div> */}
            </div>
          </div>
          </div>
        </section>

       
    </>
  );
};

export default Home;
