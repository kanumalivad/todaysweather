import React from 'react';
import './weather-title.scss';
import logo from '../../assets/amcharts_weather_icons_1.0.0/animated/day-1.svg';

class WeatherTitle extends React.Component {
    render() {
        return(
            <React.Fragment>
            <div className="title-wrap">
                <div className="time-wrap">Saturday, 6:51 PM</div>
                <div className="location">
                    <span className="city">Sao Paulo, </span>
                    <span className="country">Brazil</span>
                </div>
                <div className="weather-tag">Mostly Cloudy</div>
                <div className="temprature-wrap">
                    <img src={logo} className="weather-icon"/>
                    <span className="degree">24</span>
                    <span className="celcius">&#8451;</span>
                </div>
            </div>
            </React.Fragment>
        );
    }
}

export default WeatherTitle;