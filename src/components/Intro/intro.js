import React, { useEffect, useRef } from 'react';
import './intro.css';
import btnImg from '../../assets/hireme.png';

const HackerText = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const letters = '01';
        const fontSize = 14;
        const columns = canvas.width / fontSize;
        const drops = Array.from({ length: columns }).fill(1);

        const draw = () => {
            ctx.fillStyle = 'rgba(30, 30, 30, 0.1)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = '#ff0000';
            ctx.font = `${fontSize}px monospace`;

            for (let i = 0; i < drops.length; i++) {
                const text = letters[Math.floor(Math.random() * letters.length)];
                ctx.fillText(text, i * fontSize, drops[i] * fontSize);

                if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                    drops[i] = 0;
                }
                drops[i]++;
            }
        };

        const interval = setInterval(draw, 33);
        return () => clearInterval(interval);
    }, []);

    return <canvas ref={canvasRef} className="matrixCanvas" />;
};

const Intro = () => {
    return (
        <section id="intro">
            <HackerText />
            <div className="introContent">
                <span className="introText">
                    Hello, I'm <span className="introName">Pahul</span>.<br />
                </span>
                <p className="introPara">I am a Software Engineer.</p>
                <a href="mailto:pahulbrar34@gmail.com">
                    <button className="btn">
                        <img src={btnImg} alt="Hire" className='btnImg' /> Hire Me
                    </button>
                </a>
            </div>
        </section>
    );
};

export default Intro;
