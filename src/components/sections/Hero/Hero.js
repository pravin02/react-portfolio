import React from 'react';

import './Hero.css';

import image6 from '../../../assets/img/slider/6.png';
import image500 from '../../../assets/img/about/500x500.png';
import image3 from '../../../assets/img/about/ppp.png';

const Hero = ({ id }) => {
    return (
        <div className="arlo_tm_section" id={id}>
            <div className="arlo_tm_hero_header">
                <div className="hero_image jarallax" data-img-url={image6} data-speed="0"></div>
                <div className="overlay"></div>
                <div className="hero_content">
                    <div className="image_wrap">
                        <img src={image3} alt="" />
                        <div className="main" data-img-url={image3}></div>
                    </div>
                    <div className="name_holder">
                        <h3>Pravin <span>Patil</span></h3>
                    </div>
                    <div className="text_typing">
                        <p>I'm a <span className="arlo_tm_animation_text_word"></span></p>
                    </div>
                </div>
                <div className="arlo_tm_arrow_wrap bounce anchor">
                    <a href="#about"><i className="xcon-angle-double-down"></i></a>
                </div>
            </div>
        </div>
    )
}

export default Hero;
