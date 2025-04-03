import React from 'react';
import '../assets/styles/SamplePage.css';
import Navbar from '../assets/components/navbar';

const SamplePage = () => {
    // Sample business plan data
    const businessPlans = [
        {
            id: 1,
            title: "Tech Startup SaaS Platform",
            industry: "Software as a Service",
            description: "Comprehensive plan for a B2B workflow automation tool with 5-year financial projections and go-to-market strategy.",
            fundingTarget: "$500,000",
            pages: 42,
            downloadLink: "#"
        },
        {
            id: 2,
            title: "Organic Food Delivery Service",
            industry: "Food & Beverage",
            description: "Farm-to-table subscription service with detailed logistics planning and customer acquisition strategy.",
            fundingTarget: "$250,000",
            pages: 38,
            downloadLink: "#"
        },
        {
            id: 3,
            title: "AI-Powered Healthcare Analytics",
            industry: "Healthcare Technology",
            description: "Innovative patient data analysis platform with regulatory compliance roadmap and partnership strategy.",
            fundingTarget: "$1,200,000",
            pages: 56,
            downloadLink: "#"
        },
        {
            id: 4,
            title: "Sustainable Fashion E-Commerce",
            industry: "Retail",
            description: "Ethical clothing marketplace with detailed supplier network and customer retention models.",
            fundingTarget: "$350,000",
            pages: 45,
            downloadLink: "#"
        },
        {
            id: 5,
            title: "Mobile Fitness Application",
            industry: "Health & Wellness",
            description: "Personalized workout app with subscription revenue model and influencer marketing plan.",
            fundingTarget: "$150,000",
            pages: 32,
            downloadLink: "#"
        },
        {
            id: 6,
            title: "Urban Microbrewery",
            industry: "Food & Beverage",
            description: "Craft beer production and taproom business with distribution strategy and local marketing plan.",
            fundingTarget: "$750,000",
            pages: 48,
            downloadLink: "#"
        }
    ];

    return (
        <>
            <Navbar />
            <div className="sample-page">
                <section className="hero">
                    <div className="container">
                        <h1>Sample Business Plans</h1>
                        <p>Explore our professionally crafted business plan examples across various industries</p>
                    </div>
                </section>

                <section className="sample-plans">
                    <div className="container">
                        <div className="filter-options">
                            <div className="filter-group">
                                <label htmlFor="industry">Filter by Industry:</label>
                                <select id="industry">
                                    <option value="all">All Industries</option>
                                    <option value="tech">Technology</option>
                                    <option value="food">Food & Beverage</option>
                                    <option value="healthcare">Healthcare</option>
                                    <option value="retail">Retail</option>
                                </select>
                            </div>
                            <div className="filter-group">
                                <label htmlFor="funding">Funding Target:</label>
                                <select id="funding">
                                    <option value="all">All Ranges</option>
                                    <option value="0-250k">$0 - $250K</option>
                                    <option value="250k-500k">$250K - $500K</option>
                                    <option value="500k+">$500K+</option>
                                </select>
                            </div>
                        </div>

                        <div className="plans-grid">
                            {businessPlans.map(plan => (
                                <div className="plan-card" key={plan.id}>
                                    <div className="plan-header">
                                        <h3>{plan.title}</h3>
                                        <span className="industry-badge">{plan.industry}</span>
                                    </div>
                                    <div className="plan-body">
                                        <p>{plan.description}</p>
                                        <div className="plan-meta">
                                            <div className="meta-item">
                                                <span className="meta-label">Funding Target:</span>
                                                <span className="meta-value">{plan.fundingTarget}</span>
                                            </div>
                                            <div className="meta-item">
                                                <span className="meta-label">Pages:</span>
                                                <span className="meta-value">{plan.pages}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="plan-footer">
                                        <a href={plan.downloadLink} className="btn btn-outline">View Sample</a>
                                        <a href="#contact" className="btn">Get Custom Plan</a>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="pagination">
                            <button className="page-btn active">1</button>
                            <button className="page-btn">2</button>
                            <button className="page-btn">3</button>
                            <span className="page-ellipsis">...</span>
                            <button className="page-btn">Next</button>
                        </div>
                    </div>
                </section>

                <section className="cta-section">
                    <div className="container">
                        <h2>Need a Custom Business Plan?</h2>
                        <p>Our experts will create a 100% unique plan tailored to your specific business needs and funding goals.</p>
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

export default SamplePage;