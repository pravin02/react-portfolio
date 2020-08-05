import React from 'react';

import logo from '../../assets/img/logo/ppp.png';
import lightLogo from '../../assets/img/logo/ppp.png';

const Logo = () =>
    (
        <>
            <div className="logo">
                <a className="dark" href="#"><img src={logo} alt="" /></a>
                <a className="light" href="#"><img src={lightLogo} alt="" /></a>
            </div>
        </>
    )

export default Logo;
