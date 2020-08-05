import React from 'react';
import mobileLogo from '../../../../assets/img/logo/mobile.png';

const Header = () =>
    (
        <div className="topbar_inner">
            <div className="container">
                <div className="topbar_in">
                    <div className="logo">
                        <a href="#"><img src={mobileLogo} alt="" /></a>
                    </div>
                    <div className="trigger">
                        <a href="#">
                            <span className="menu">Menu</span>
                            <span className="close">Close</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )

export default Header;
