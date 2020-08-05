import React from 'react';

import './Services.css';

const Services = ({ id }) => {
    return (
        <div className="arlo_tm_section" id={id}>
            <div className="arlo_tm_services">
                <div className="container">
                    <div className="arlo_title_holder">
                        <span>What I Do</span>
                        <h3>Services</h3>
                    </div>
                    <div className="service_inner">
                        <ul>
                            <li>
                                <div className="inner">
                                    <img className="svg" src="img/svg/source.svg" alt="" />
                                    <h3>Web Developmnet</h3>
                                    <p>Web design is a similar process of creation, with the intention of presenting...</p>
                                </div>
                            </li>
                            <li>
                                <div className="inner">
                                    <img className="svg" src="img/svg/line-chart.svg" alt="" />
                                    <h3>Brand Identity</h3>
                                    <p>Web design is a similar process of creation, with the intention of presenting...</p>
                                </div>
                            </li>
                            <li>
                                <div className="inner">
                                    <img className="svg" src="img/svg/light-bulb.svg" alt="" />
                                    <h3>Creative Design</h3>
                                    <p>Web design is a similar process of creation, with the intention of presenting...</p>
                                </div>
                            </li>
                            <li>
                                <div className="inner">
                                    <img className="svg" src="img/svg/adobe-illustrator.svg" alt="" />
                                    <h3>Adobe Illustrator</h3>
                                    <p>Web design is a similar process of creation, with the intention of presenting...</p>
                                </div>
                            </li>
                            <li>
                                <div className="inner">
                                    <img className="svg" src="img/svg/adobe-photoshop.svg" alt="" />
                                    <h3>Adobe Photoshop</h3>
                                    <p>Web design is a similar process of creation, with the intention of presenting...</p>
                                </div>
                            </li>
                            <li>
                                <div className="inner">
                                    <img className="svg" src="img/svg/twitter-1.svg" alt="" />
                                    <h3>Social Media</h3>
                                    <p>Web design is a similar process of creation, with the intention of presenting...</p>
                                </div>
                            </li>
                        </ul>
                        <div className="arlo_tm_progress_wrap">
                            <div className="progress_wrap_inner">
                                <div className="left">
                                    <div className="main_title">
                                        <h3>In a <span>short time</span>, I have been able to achieve excellence in all areas of app and web development.</h3>
                                    </div>
                                    <div className="text">
                                        <p>I provide cost-effective and high quality products to meet our Clients’ needs of timely delivery World Wide. I want to be local in a global world to be where our Customers need our services customers need our services.</p>
                                    </div>
                                </div>
                                <div className="right">
                                    <div className="arlo_progress">
                                        <div className="progress_inner" data-value="95" data-color="#ff214f">
                                            <span><span className="label">Web Development</span><span className="number">95%</span></span>
                                            <div className="background"><div className="bar"><div className="bar_in"></div></div></div>
                                        </div>
                                        <div className="progress_inner" data-value="80" data-color="#ff214f">
                                            <span><span className="label">Brand Identity</span><span className="number">80%</span></span>
                                            <div className="background"><div className="bar"><div className="bar_in"></div></div></div>
                                        </div>
                                        <div className="progress_inner" data-value="90" data-color="#ff214f">
                                            <span><span className="label">Javascript</span><span className="number">90%</span></span>
                                            <div className="background"><div className="bar"><div className="bar_in"></div></div></div>
                                        </div>
                                        <div className="progress_inner" data-value="85" data-color="#ff214f">
                                            <span><span className="label">WordPress</span><span className="number">85%</span></span>
                                            <div className="background"><div className="bar"><div className="bar_in"></div></div></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services;
