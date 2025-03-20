import React from 'react';
import './works.css';
import Portfolio1 from '../../assets/acmeplex.png';
import Portfolio2 from '../../assets/ramsai.png';
import Portfolio3 from '../../assets/bet.png';
// import Portfolio4 from '../../assets/portfolio-4.png';
// import Portfolio5 from '../../assets/portfolio-5.png';
// import Portfolio6 from '../../assets/portfolio-6.png';

const Works = () => {
    return (
        <section id='works'>
            <h2 className="worksTitle">My Projects</h2>
            <span className="worksDesc">I take pride in my work the best it can be, and that it does the job its built to do effortlessly. I am excited to bring my skills and experience to help you with all your endevours.</span>
            <div className="worksImgs">
                <img src={Portfolio1} alt="" className="worksImg" />
                <img src={Portfolio2} alt="" className="worksImg" />
                <img src={Portfolio3} alt="" className="worksImg" />
                {/* <img src={Portfolio4} alt="" className="worksImg" /> */}
                {/* <img src={Portfolio5} alt="" className="worksImg" /> */}
                {/* <img src={Portfolio6} alt="" className="worksImg" /> */}
            </div>
            <a href="https://github.com/pbrar17" target="_blank" rel="noopener noreferrer">
            <button className="workBtn">See More</button>
            </a>
           
        </section>
    );
}

export default Works;