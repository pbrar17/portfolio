import React from 'react';
import './intro.css';
import btnImg from '../../assets/hireme.png';
import { Link } from 'react-scroll';

const Intro = () => {
    return (
        <section id="intro">
            <div className="introContent">
                {/* <span className="hello">Hello,</span> */}
                <span className="introText">Hello, I'm <span className="introName">Pahul</span>.<br /></span>
                <p className="introPara">I am a Software Engineer.</p>
                <Link><button className="btn"><img src={btnImg} alt="Hire" className='btnImg'/> Hire Me</button></Link>
            </div>
            {/* <img src={bg} alt="Profile" className="bg" /> */}
        </section>
    );
}

export default Intro;