import React from 'react';
import './Preloader.css';
import jQuery from 'jquery';

class Preloader extends React.Component {

    componentDidMount() {
        setTimeout(function () {
            jQuery('.arlo_tm_preloader').addClass('loaded');
        }, 1000);
    }

    render() {
        return (
            <div className="arlo_tm_preloader">
                <div className="spinner_wrap">
                    <div className="spinner"></div>
                </div>
            </div>
        )
    }
}

export default Preloader;
