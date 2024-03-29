import React from 'react'; // Import React at the top
import './Hero.css'; // Import the CSS file for the component
// import Testimoni from './img/Testimoni.png';

import Hero4 from './hero4.png';


import 'bootstrap/dist/css/bootstrap.min.css';
const Hero = () => {
    
  return (
    <>
<body>
    <p style={{backgroundImage: "url('Hero2.png')" }}/>
    <nav className="navbar navbar-expand-lg navbar-light bg-light bg-transparent text-white d-flex">
        {/* <div className="container ml-5 " style={{width: '1000px;'}}> */}
            <a className="navbar-brand " href="#">
                <img src={"https://assets-global.website-files.com/64ec3fc5bb945b48c0a37b1c/64ec859abeec7a9efe7eef25_logo.svg"} alt="brand"/>
                <span></span>
            </a>
            <button className="navbar-toggler shadow-none " type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
                aria-label="Toggle navigation">
                <i className='bx bx-menu'></i>
            </button>
           
            <div className="collapse navbar-collapse d-flex justify-content-end mr-0" id="navbarNavAltMarkup">
                <div className="navbar-nav ">
                    <a className="nav-link active" aria-current="page" href="#">Product</a>
                    <a className="nav-link" href="#">Features</a>
                    <a className="nav-link" href="#">About</a>
                    <a className="nav-link" href="#">Contact</a>
                </div>
                <a href="#" className="btn btn-primary shadow-none justify-content-end">Get started</a>
            </div>
        {/* </div> */}
    </nav>


    <section className="hero">
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <div className="copy" data-aos="fade-up" data-aos-duration="3000">
                        <div className="text-label">
                        AI driven hands-free news experience.
                        </div>
                        <div className="text-hero-bold">
                            Say goodbye to Scrolling.
                        </div>
                        <div className="text-hero-regular">
                            
                            Experience the future of news with our AI-powered voice-controlled assistant.
                        </div>
                        <div className="cta">
                            <a href="#" className="btn btn-primary shadow-none mr-2 mt-5">Explore now</a>
                            <a href="#" className="btn btn-secondary shadow-none ms-3 ml-2 mt-5">See pricing</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-6" data-aos="fade-up" data-aos-duration="3000">
                    <img src={Hero4}  className="" alt="img" />
                </div>
            </div>
        </div>
    </section>

    <section className="testimoni-brand">
        <div className="container">
            <div className="row">
                
            </div>
        </div>
    </section>


 
   </body>
    </>
  );
};

export default Hero;
