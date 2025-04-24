import React from 'react';
import './works.css';
import Portfolio1 from '../../assets/acmeplex-ezgif.com-optimize.gif';
import Portfolio2 from '../../assets/ramsai.gif';
import Portfolio3 from '../../assets/bet.png';
import Portfolio4 from '../../assets/byteBuddy.gif';

const Works = () => {
    return (
        <section id='works'>
            <h2 className="worksTitle">My Projects</h2>
            <span className="worksDesc">
                I take pride in making my work clean, functional, and impactful. Here are a few projects that reflect my growth and passion for development.
            </span>

            <div className="worksContainer">


                {/* ByteBuddy */}
                <div className="projectCard">
                    <img src={Portfolio4} alt="Byte Buddy" className="worksImg" />
                    <h3 className="projectTitle">🤖 ByteBuddy</h3>
                    <p className="projectDesc">
                    An AI-powered LeetCode-stley tool that helps users solve problems with smart guidance, hints, and real-time support.
                    </p>
                    <p className="projectTech">JavaScript • Express • Ollama • SqlLite</p>
                    <div className="projectLinks">
                        <a href="https://github.com/pbrar17/byteBuddy" target="_blank" rel="noopener noreferrer">View on GitHub</a>
                        {/* <a href="#" target="_blank" rel="noopener noreferrer">Live Demo</a> */}
                    </div>
                </div>    
                {/* Acmeplex */}
                <div className="projectCard">
                    <img src={Portfolio1} alt="Acmeplex Project" className="worksImg" />
                    <h3 className="projectTitle">🎬 Acmeplex</h3>
                    <p className="projectDesc">
                        A modern movie theatre booking app where users can browse, select, and book seats for the latest films.
                    </p>
                    <p className="projectTech">React • Next.js • Springboot • MySql</p>
                    <div className="projectLinks">
                        <a href="https://github.com/pbrar17/acmeplex" target="_blank" rel="noopener noreferrer">View on GitHub</a>
                        {/* <a href="#" target="_blank" rel="noopener noreferrer">Live Demo</a> */}
                    </div>
                </div>

                {/* Ramsai */}
                <div className="projectCard">
                    <img src={Portfolio2} alt="Ramsai Project" className="worksImg" />
                    <h3 className="projectTitle">🍲 Chef RamsAi</h3>
                    <p className="projectDesc">
                        A recipe-sharing platform that helps home cooks discover, save, and share their favorite dishes.
                    </p>
                    <p className="projectTech">React • AI • CSS</p>
                    <div className="projectLinks">
                        <a href="https://github.com/pbrar17/Chef_RamsAI#" target="_blank" rel="noopener noreferrer">View on GitHub</a>
                        <a href="https://chef-rams-ai.vercel.app/" target="_blank" rel="noopener noreferrer">Live Demo</a>
                    </div>
                </div>

                {/* Bet */}
                <div className="projectCard">
                    <img src={Portfolio3} alt="Bet Project" className="worksImg2" />
                    <h3 className="projectTitle">💰 Bet</h3>
                    <p className="projectDesc">
                        A betting odds tracker that allows users to compare live odds from multiple sources in real-time.
                    </p>
                    <p className="projectTech">Next.js • JavaScript • API Integration</p>
                    <div className="projectLinks">
                        <a href="https://github.com/pbrar17/ParlAi" target="_blank" rel="noopener noreferrer">View on GitHub</a>
                        {/* <a href="#" target="_blank" rel="noopener noreferrer">Live Demo</a> */}
                    </div>
                </div>
            </div>

            <a href="https://github.com/pbrar17" target="_blank" rel="noopener noreferrer">
                <button className="workBtn">See More on GitHub</button>
            </a>
        </section>
    );
}

export default Works;
