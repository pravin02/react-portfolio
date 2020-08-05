import React from 'react';

import './About.css';

import image2 from '../../../assets/img/slider/6.png';
import image500 from '../../../assets/img/about/500x500.png';

import giftSVG from '../../../assets/img/svg/gift.svg';
import calendarSVG from '../../../assets/img/svg/calendar-4.svg';
import locationSVG from '../../../assets/img/svg/location-1.svg';
import interestSVG from '../../../assets/img/svg/game-controller-2.svg';
import studySVG from '../../../assets/img/svg/study-5.svg';
import degreeSVG from '../../../assets/img/svg/degree-1.svg';
import mailSVG from '../../../assets/img/svg/message-3.svg';
import callSVG from '../../../assets/img/svg/call-2.svg';


const About = ({ id }) => {
    return (
        <div className="arlo_tm_section" id={id}>
            <div className="arlo_tm_about_wrap_all">
                <div className="arlo_tm_about">
                    <div className="container">
                        <div className="arlo_title_holder">
                            <span>Main Info</span>
                            <h3>About Us</h3>
                        </div>
                        <div className="about_inner">
                            <div className="leftbox">
                                <div className="about_image_wrap parallax" data-relative-input="true">
                                    <div className="image layer" data-depth="0.1">
                                        <img src={image500} alt="" />
                                        <div className="inner" data-img-url={image2}></div>
                                    </div>
                                    <div className="border layer" data-depth="0.2">
                                        <img src={image500} alt="" />
                                        <div className="inner"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="rightbox">
                                <div className="about_title">
                                    <h3>I'm Albert Walkers and <span className="arlo_tm_animation_text_word"></span></h3>
                                </div>
                                <div className="text">
                                    <p>Hi! My name is <span>Albert Walkers</span>. I am a Web Developer, and I'm very passionate and dedicated to my work. With 20 years experience as a professional Web developer, I have acquired the skills and knowledge necessary to make your project a success. I enjoy every step of the design process, from discussion and collaboration.</p>
                                </div>
                                <div className="about_short_contact_wrap">
                                    <ul>
                                        <li>
                                            <img className="svg" src={giftSVG} alt="" />
                                            <span><label>Birthday:</label> 01.07.1990</span>
                                        </li>
                                        <li>
                                            <img className="svg" src={calendarSVG} alt="" />
                                            <span><label>Age:</label> 29</span>
                                        </li>
                                        <li>
                                            <img className="svg" src={locationSVG} alt="" />
                                            <span><label>Location:</label> <a className="href_location" href="#">Ave 11, New York, USA</a></span>
                                        </li>
                                        <li>
                                            <img className="svg" src={interestSVG} alt="" />
                                            <span><label>Interests:</label> Playstation, Reading</span>
                                        </li>
                                        <li>
                                            <img className="svg" src={studySVG} alt="" />
                                            <span><label>Study:</label> <a className="href_location" href="#"> Univercity of Chicago</a></span>
                                        </li>
                                        <li>
                                            <img className="svg" src={degreeSVG} alt="" />
                                            <span><label>Degree:</label> Master</span>
                                        </li>
                                        <li>
                                            <img className="svg" src={mailSVG} alt="" />
                                            <span><label>Mail:</label> <a href="mailto:example@gmail.com">mymail&#64;gmail.com</a></span>
                                        </li>
                                        <li>
                                            <img className="svg" src={callSVG} alt="" />
                                            <span><label>Phone:</label> <a href="tel:+77 022 177 05 05">+77 022 177 05 05</a></span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="buttons">
                                    <ul>
                                        <li><a href="#"><span>Download CV</span></a></li>
                                        <li><a href="#"><span>Send Message</span></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;
