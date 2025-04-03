import React from 'react';
import '../assets/styles/AboutUsPage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faLightbulb, faHandshake, faChartLine } from '@fortawesome/free-solid-svg-icons';
import Navbar from '../assets/components/navbar';

const AboutUsPage = () => {
    return (
        <>
            <Navbar />
            <div className="about-us-page">
                <section className="about-hero">
                    <div className="container">
                        <h1>Our Story: Empowering Entrepreneurs Since 2018</h1>
                        <p className="subtitle">From startup dreams to funded realities - we've been there every step of the way</p>
                    </div>
                </section>

                <section className="mission">
                    <div className="container">
                        <div className="mission-content">
                            <div className="mission-text">
                                <h2>Our Mission</h2>
                                <p>To transform entrepreneurial visions into investor-ready business plans that open doors to funding and growth opportunities.</p>
                                <p>We believe every great business starts with a solid plan, and we're committed to making professional planning accessible to all founders.</p>
                            </div>
                            <div className="mission-image">
                                <img src="/images/team-working.jpg" alt="Our team working together" />
                            </div>
                        </div>
                    </div>
                </section>

                <section className="values">
                    <div className="container">
                        <h2>Our Core Values</h2>
                        <div className="values-grid">
                            <div className="value-card">
                                <FontAwesomeIcon icon={faUsers} className="value-icon" />
                                <h3>Client Success First</h3>
                                <p>We measure our success by your funding achievements and business growth.</p>
                            </div>
                            <div className="value-card">
                                <FontAwesomeIcon icon={faLightbulb} className="value-icon" />
                                <h3>Innovative Approach</h3>
                                <p>We combine industry expertise with cutting-edge financial modeling techniques.</p>
                            </div>
                            <div className="value-card">
                                <FontAwesomeIcon icon={faHandshake} className="value-icon" />
                                <h3>Integrity Always</h3>
                                <p>Honest advice and realistic projections you can build your business on.</p>
                            </div>
                            <div className="value-card">
                                <FontAwesomeIcon icon={faChartLine} className="value-icon" />
                                <h3>Results-Driven</h3>
                                <p>Every plan is optimized to help you secure funding and accelerate growth.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="team">
                    <div className="container">
                        <h2>Meet The Leadership Team</h2>
                        <div className="team-grid">
                            <div className="team-member">
                                <img src="/images/ceo.jpg" alt="Isaack Kiprotich, CEO" />
                                <h3>Isaack Kiprotich</h3>
                                <p className="position">CEO & Founder</p>
                                <p className="bio">Former investment banker with 12 years experience evaluating business plans for VC firms.</p>
                            </div>
                            <div className="team-member">
                                <img src="/images/cfo.jpg" alt="Juma Alpha, CFO" />
                                <h3>Juma Alpha</h3>
                                <p className="position">CFO</p>
                                <p className="bio">Financial modeling expert who has helped raise over $200M in startup capital.</p>
                            </div>
                            <div className="team-member">
                                <img src="/images/cto.jpg" alt="Kevin Mwema, CTO" />
                                <h3>Kevin Mwema</h3>
                                <p className="position">CTO</p>
                                <p className="bio">Built our proprietary planning platform used by thousands of entrepreneurs.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="milestones">
                    <div className="container">
                        <h2>Our Journey</h2>
                        <div className="timeline">
                            <div className="timeline-item">
                                <div className="timeline-year">2018</div>
                                <div className="timeline-content">
                                    <h3>Founded in Kenya, Nairobi</h3>
                                    <p>Started with just 3 team members helping local startups with pitch decks.</p>
                                </div>
                            </div>
                            <div className="timeline-item">
                                <div className="timeline-year">2020</div>
                                <div className="timeline-content">
                                    <h3>First $1M Raised</h3>
                                    <p>Our clients collectively raised over $1M using our business plans.</p>
                                </div>
                            </div>
                            <div className="timeline-item">
                                <div className="timeline-year">2022</div>
                                <div className="timeline-content">
                                    <h3>National Expansion</h3>
                                    <p>Expanded our services to all 50 states with a team of 25 experts.</p>
                                </div>
                            </div>
                            <div className="timeline-item">
                                <div className="timeline-year">2024</div>
                                <div className="timeline-content">
                                    <h3>$50M Milestone</h3>
                                    <p>Cumulative funding raised by our clients surpassed $50 million.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="cta">
                    <div className="container">
                        <h2>Ready to Build Your Success Story?</h2>
                        <p>Join thousands of entrepreneurs who've turned their visions into funded realities with our help.</p>
                        <a href="#contact" className="btn btn-accent">Get Started Today</a>
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

export default AboutUsPage;