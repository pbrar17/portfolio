import React from 'react';
import './skills.css';

import git from "../../Images/git.png"
import CSS from "../../Images/css.png"
import Spring from "../../Images/spring.png"
import react from "../../Images/react.png"
import next from "../../Images/next1.png"
import mysql from "../../Images/mysql.svg"
import express from "../../Images/express.png"
import jest from "../../Images/jest.png"
import typescript from "../../Images/typescript.png"
import java from "../../Images/java.png"
import js from "../../Images/js.png"
import html from "../../Images/html.png"
// import api from "../../Images/api.jpg"
import python from "../../Images/python.png"
import node from "../../Images/node.png"

const Skills = () => {
    return (
        <section id='skills'>
            <span className="skillTitle">About Me</span>
            <span className="skillDesc">I'm a Hardworking, dedicated Software Engineer, capable of working with any tech stack to deliver the best product. My passion for coding has helped me navigate all hardships of life, and made me a better person, and an even better devolper. 
                I am always thinking about making something better, somtimes my ambitions become hurdles, but I like to reach for the stars, if I fail I will just be among the planets! </span>

            <section id="skills">
            <h2 className="skillsTitle">My Skills</h2>
            <div className="skillsGrid">
                <div className="skillItem">
                    <img src={next} alt="Next.js" />
                    <p>Next.js</p>
                </div>
                <div className="skillItem">
                    <img src={react} alt="React" />
                    <p>React</p>
                </div>
                <div className="skillItem">
                    <img src={Spring} alt="Spring Boot" />
                    <p>Spring Boot</p>
                </div>
                <div className="skillItem">
                    <img src={mysql} alt="MySQL" />
                    <p>MySQL</p>
                </div>
                <div className="skillItem">
                    <img src={node} alt="nodejs" />
                    <p>Node.js</p>
                </div>
                {/* <div className="skillItem">
                    <img src={api} alt="api" />
                    <p>API</p>
                </div> */}
            </div>

            <div className="skillsGrid">
                <div className="skillItem">
                    <img src={jest} alt="JEST" />
                    <p>JEST</p>
                </div>
                <div className="skillItem">
                    <img src={typescript} alt="typescript" />
                    <p>Typescript</p>
                </div>
                <div className="skillItem">
                    <img src={express} alt="Express" />
                    <p>Express</p>
                </div>
                <div className="skillItem">
                    <img src={java} alt="java" />
                    <p>Java</p>
                </div>
            </div>
            <div className="skillsGrid">
                <div className="skillItem">
                    <img src={html} alt="HTML" />
                    <p>HTML</p>
                </div>
                <div className="skillItem">
                    <img src={js} alt="javascript" />
                    <p>JavaScript</p>
                </div>
                <div className="skillItem">
                    <img src={CSS} alt="css" />
                    <p>CSS</p>
                </div>
            </div>
            <div className="skillsGrid">
                <div className="skillItem">
                    <img src={git} alt="git" />
                    <p>GIT</p>
                </div>
                <div className="skillItem">
                    <img src={python} alt="python" />
                    <p>Python</p>
                </div>
            </div>
        </section>
            {/* <div className="skillBars">
                <div className="skillBar">
                    <img src={UIDesign} alt="UIDesign" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>UI/UX Design</h2>
                        <p>This is a demo text, you can write your own content here.</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={WebDesign} alt="WebDesign" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>Website Design</h2>
                        <p>This demo text can be changed while making the production ready website.</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={AppDesign} alt="AppDesign" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>App Design</h2>
                        <p>You can write text related to mobile app development.</p>
                    </div>
                </div>
            </div> */}
        </section>
    );
}

export default Skills;