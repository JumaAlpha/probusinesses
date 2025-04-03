import React, { useEffect, useRef } from 'react';
import '../assets/styles/Homepage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Navbar from '../assets/components/navbar';
import heroImage from '../assets/images/hero-image.jpg';

const Homepage = () => {
    const pageContentRef = useRef(null);
    const typingIntervalRef = useRef(null);

    useEffect(() => {
        const text = `Executive Summary:\n\nOur innovative SaaS platform revolutionizes small business operations by automating workflow processes. With $2.3M in projected Year 1 revenue and 65% gross margins, we're seeking $500K in seed funding to complete development and launch our MVP. The $4.2B workflow automation market is growing at 12% CAGR, and our patent-pending technology addresses key pain points for SMBs. Our experienced team has successfully scaled two previous startups to acquisition. This investment will fund product development, marketing, and key hires to capture 3% market share within 24 months.`;

        const startTypingAnimation = () => {
            const typingElement = document.getElementById('typing-text');
            if (!typingElement) return;

            typingElement.innerHTML = '';
            const textNode = document.createTextNode('');
            typingElement.appendChild(textNode);

            let i = 0;
            const speed = 50;
            const variation = 30;

            const typeWriter = () => {
                if (i < text.length) {
                    if (text.charAt(i) === '\n') {
                        typingElement.appendChild(document.createElement('br'));
                    } else {
                        textNode.nodeValue += text.charAt(i);
                    }
                    i++;
                    const delay = Math.random() * variation + (speed - variation / 2);
                    typingIntervalRef.current = setTimeout(typeWriter, delay);
                } else {
                    typingIntervalRef.current = setTimeout(() => {
                        i = 0;
                        typingElement.innerHTML = '';
                        typingElement.appendChild(textNode);
                        typeWriter();
                    }, 8000);
                }
            };

            typeWriter();
        };

        startTypingAnimation();

        return () => {
            if (typingIntervalRef.current) {
                clearTimeout(typingIntervalRef.current);
            }
        };
    }, []);

    return (
        <>
            <Navbar />
            <div className="homepage">
                <section className="hero">
                    <div className="container">
                        <h1>Investor-Ready Business Plans in 4 Simple Steps</h1>
                        <p>Our expert writers craft funding-winning plans with a 97% success rate. Focus on your business while we handle the paperwork.</p>
                        <a href="#contact" className="btn">Get Your Free Consultation</a>
                    </div>
                    <div className="hero-image-container">
                        <img
                            src={heroImage}
                            alt="Business professionals discussing plans"
                            className="sticky-hero-image"
                        />
                    </div>
                </section>

                <section className="stats">
                    <div className="container">
                        <div className="stats-grid">
                            <div className="stat-card">
                                <div className="stat-number">99%</div>
                                <div className="stat-title">Client Satisfaction</div>
                                <div className="stat-desc">Rated excellent by our clients</div>
                            </div>

                            <div className="stat-card">
                                <div className="stat-number">8K+</div>
                                <div className="stat-title">Business Plans</div>
                                <div className="stat-desc">Successfully delivered</div>
                            </div>

                            <div className="typing-card">
                                <div className="book-page">
                                    <div className="page-content">
                                        <div className="typing-animation" id="typing-text"></div>
                                        <div className="typing-cursor">|</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="steps" id="process">
                    <div className="container">
                        <div className="section-title">
                            <h2>Our 4-Step Success Formula</h2>
                            <p>We transform your vision into a compelling funding proposal</p>
                        </div>
                        <div className="steps-grid">
                            <div className="step-card">
                                <div className="step-number">1</div>
                                <h3>Strategize Your Vision</h3>
                                <p>We define your unique value proposition, target market, and competitive advantage to create a solid foundation.</p>
                            </div>
                            <div className="step-card">
                                <div className="step-number">2</div>
                                <h3>Build Financial Blueprint</h3>
                                <p>Our financial experts create investor-ready projections, cash flow analysis, and funding requirements.</p>
                            </div>
                            <div className="step-card">
                                <div className="step-number">3</div>
                                <h3>Design Execution Plan</h3>
                                <p>We outline your operations, marketing strategy, and team structure to showcase scalability.</p>
                            </div>
                            <div className="step-card">
                                <div className="step-number">4</div>
                                <h3>Polish to Perfection</h3>
                                <p>Final professional editing and formatting ensures your plan makes the right impression.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="cta">
                    <div className="container">
                        <h2>Ready to Secure Your Funding?</h2>
                        <p>Our business plans have helped clients raise over $50M in capital. Let's discuss how we can help you achieve your goals.</p>
                        <a href="#contact" className="btn btn-accent">Start Your Plan Today</a>
                    </div>
                </section>

                <footer className="footer">
                    <div className="container">
                        <p>&copy; 2025 ProBusinessPlans. All rights reserved.</p>
                    </div>
                </footer>
            </div>
        </>
    );
};

export default Homepage;