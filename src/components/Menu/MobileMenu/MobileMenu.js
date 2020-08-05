import React from 'react';

import './MobileMenu.css';
import Header from './Header/Header';

const MobileMenu = (props) => {
    return (
        <div className="arlo_tm_topbar">
            <Header />
            <div className="dropdown">
                <div className="container">
                    <div className="dropdown_inner">
                        {props.children}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MobileMenu;
