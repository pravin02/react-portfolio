import React from 'react';

import './Social.css';

const Social = ({ socialArray }) => {
    return (
        <>
            <div className="social">
                <ul>
                    {
                        socialArray.map((social, index) =>
                            <li key={index}><a href={social.link} target="_blank"><i className={social.icon}></i></a></li>
                        )
                    }                    
                </ul>
            </div>
        </>
    )
}

export default Social;
