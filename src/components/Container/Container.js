import React from 'react';

import './Container.css';
import Commons from '../../utils';

class Container extends React.Component {
   
    componentDidMount() {
        Commons.arlo_tm_popupscroll();
        Commons.arlo_tm_scrollable();
        Commons.arlo_mobile_menu();
        Commons.arlo_tm_popup_news();
        Commons.arlo_tm_anchor();        
    }

    render() {
        return (
            <div className="arlo_tm_all_wrap">
                <div className="wrapper_inner">
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default Container;
