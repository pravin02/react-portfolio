import React from 'react';

import './Leftmenu.css';

import Social from '../../Social/Social';
import Logo from '../../Logo/Logo';
import Resize from '../../Resize/Resize';

const LeftMenu = (props) => {
    const socialArray =
        [
            { icon: 'xcon-facebook', link: 'https://facebook.com/' },
            { icon: 'xcon-linkedin', link: 'https://linkedin.com/' },
            { icon: 'xcon-instagram', link: 'https://instagram.com/' }
        ];

    return (
        <div className="arlo_tm_leftpart">
            <div className="inner">
                <Logo />
                <div className="menu scrollable">
                    {props.children}
                </div>
                <div className="bottom">
                    <Social socialArray={socialArray} />
                </div>
                <Resize />
            </div>
        </div>
    )
}

export default LeftMenu;
