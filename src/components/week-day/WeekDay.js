import React from 'react';
import './week-day.scss';
import logo from '../../assets/amcharts_weather_icons_1.0.0/animated/cloudy.svg';

class WeekDay extends React.Component {
    render() {
        return (
            <div className="day-wrap">
                <span className="day--active">Saturday</span>
                <img src={logo} className="day-icon"/>
                <div class="date-wrap">
                    <span className="day-date">31</span>
                    <span className="day-celcius">&#8451;</span>
                </div>
            </div>
        );
    }
}

export default WeekDay;