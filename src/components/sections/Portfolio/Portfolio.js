import React from 'react';

import './Portfolio.css';

const Portfolio = ({ id }) => {
    return (
        <div className="arlo_tm_section" id={id}>
            <div className="arlo_tm_portfolio">
                <div className="container">
                    <div className="arlo_title_holder">
                        <span>Creative Works</span>
                        <h3>Portfolio</h3>
                    </div>
                    <div className="portfolio_inner">
                        <div className="arlo_tm_portfolio_titles"></div>
                        <div className="portfolio_filter">
                            <ul>
                                <li><a href="#" className="current" data-filter="*">All</a></li>
                                <li><a href="#" data-filter=".video">Video</a></li>
                                <li><a href="#" data-filter=".animation">Animation</a></li>
                                <li><a href="#" data-filter=".image">Image</a></li>
                            </ul>
                        </div>
                        <div className="portfolio_list">
                            <ul className="gallery_zoom">
                                <li className="video">
                                    <div className="inner">
                                        <div className="entry arlo_tm_portfolio_animation_wrap" data-title="Popup Video" data-category="Video">
                                            <a className="popup-youtube" href="https://www.youtube.com/watch?v=ICr_bOuM9Zo">
                                                <img src="img/portfolio/600x600.jpg" alt="" />
                                                <div className="main_image" data-img-url="img/portfolio/1.jpg"></div>
                                            </a>
                                        </div>
                                    </div>
                                </li>
                                <li className="image">
                                    <div className="inner">
                                        <div className="entry arlo_tm_portfolio_animation_wrap" data-title="Popup Image" data-category="Image">
                                            <a className="zoom" href="img/portfolio/2.jpg">
                                                <img src="img/portfolio/600x600.jpg" alt="" />
                                                <div className="main_image" data-img-url="img/portfolio/2.jpg"></div>
                                            </a>
                                        </div>
                                    </div>
                                </li>
                                <li className="animation">
                                    <div className="inner">
                                        <div className="entry arlo_tm_portfolio_animation_wrap" data-title="Animate Image" data-category="Animation">
                                            <a className="zoom" href="img/portfolio/8.webp">
                                                <img src="img/portfolio/600x600.jpg" alt="" />
                                                <div className="main_image" data-img-url="img/portfolio/8.webp"></div>
                                            </a>
                                        </div>
                                    </div>
                                </li>
                                <li className="image">
                                    <div className="inner">
                                        <div className="entry arlo_tm_portfolio_animation_wrap" data-title="Popup Image" data-category="Image">
                                            <a className="zoom" href="img/portfolio/4.jpg">
                                                <img src="img/portfolio/600x600.jpg" alt="" />
                                                <div className="main_image" data-img-url="img/portfolio/4.jpg"></div>
                                            </a>
                                        </div>
                                    </div>
                                </li>
                                <li className="image">
                                    <div className="inner">
                                        <div className="entry arlo_tm_portfolio_animation_wrap" data-title="Popup Image" data-category="Image">
                                            <a className="zoom" href="img/portfolio/5.jpg">
                                                <img src="img/portfolio/600x600.jpg" alt="" />
                                                <div className="main_image" data-img-url="img/portfolio/5.jpg"></div>
                                            </a>
                                        </div>
                                    </div>
                                </li>
                                <li className="image">
                                    <div className="inner">
                                        <div className="entry arlo_tm_portfolio_animation_wrap" data-title="Popup Image" data-category="Image">
                                            <a className="zoom" href="img/portfolio/6.jpg">
                                                <img src="img/portfolio/600x600.jpg" alt="" />
                                                <div className="main_image" data-img-url="img/portfolio/6.jpg"></div>
                                            </a>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Portfolio;
