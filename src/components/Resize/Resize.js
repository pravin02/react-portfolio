import React from 'react';
import './Resize.css';

import Commons from '../../utils';

class Resize extends React.Component {

    componentDidMount() {
        Commons.arlo_tm_switcher();
    }

    render() {
        return (
            <div className="resize">
                <a href="#"><span></span></a>
            </div>
        )
    }
}

export default Resize;
