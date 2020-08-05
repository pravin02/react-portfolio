import React from 'react';

import './Contact.css';

const Contact = ({ id }) => {
    return (
        <div className="arlo_tm_section" id={id}>
            <div className="arlo_tm_contact">
                <div className="container">
                    <div className="arlo_title_holder">
                        <span>Get in Touch</span>
                        <h3>Contact</h3>
                    </div>
                    <div className="contact_inner">
                        <div className="short_list">
                            <ul>
                                <li>
                                    <img className="svg" src="img/svg/location-1.svg" alt="" />
                                    <h3>Location</h3>
                                    <p>Ave 11, New York, USA</p>
                                </li>
                                <li>
                                    <img className="svg" src="img/svg/message-3.svg" alt="" />
                                    <h3>Email</h3>
                                    <p>mymail@gmail.com</p>
                                </li>
                                <li>
                                    <img className="svg" src="img/svg/call-2.svg" alt="" />
                                    <h3>Phone</h3>
                                    <p>+77 022 177 05 05</p>
                                </li>
                            </ul>
                        </div>
                        <div className="fields">
                            <form action="https://frenify.com/" method="post" className="contact_form" id="contact_form">
                                <div className="returnmessage" data-success="Your message has been received, We will contact you soon."></div>
                                <div className="empty_notice"><span>Please Fill Required Fields</span></div>
                                <div className="first">
                                    <ul>
                                        <li>
                                            <input id="name" type="text" placeholder="Name" />
                                        </li>
                                        <li>
                                            <input id="email" type="text" placeholder="Email" />
                                        </li>
                                    </ul>
                                </div>
                                <div className="last">
                                    <textarea id="message" placeholder="Message"></textarea>
                                </div>
                                <div className="arlo_tm_button">
                                    <a id="send_message" href="#">Send Message</a>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;
