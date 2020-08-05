import React from 'react';

import MobileMenu from './Leftmenu/LeftMenu';
import LeftMenu from './MobileMenu/MobileMenu';

import menus from '../../utils/commons/menus';

const Menu = () => {
    const menuJxs =
        <ul>
            {menus.map((menu, index) =>
                <li key={menu.link + '' + index}><a href={menu.link}>{menu.lable}</a></li>
            )}
        </ul>

    return (
        <>
            <MobileMenu>
                {menuJxs}
            </MobileMenu>
            <LeftMenu>
                {menuJxs}
            </LeftMenu>
        </>
    )
}

export default Menu;