import React from 'react';
import './weather-title.scss';

class WeatherTitle extends React.Component {

    render() {
        const dateandtime = new Date ( this.props.location.localtime );
        const time = dateandtime.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
        const date = dateandtime.toLocaleString('en-US', {year: 'numeric', month : 'short', day: '2-digit'})
        
        return(
            <React.Fragment>
            <div className="title-wrap">
                <div className="date-time-wrap">
                    <div className="date">{date}</div>
                    <div className="time">{time}</div>
                </div>
                <div className="location">
                    <span className="city">{this.props.location.city}, </span>
                    <span className="country">{this.props.location.country}</span>
                </div>
                <div className="weather-tag">{this.props.weather.text}</div>
                <div className="temprature-wrap">
                    <img src={this.props.weather.icon} className="weather-icon" alt="icon"/>
                    <span className="degree">{this.props.weather.temp_c}</span>
                    <span className="celcius">&#8451;</span>
                </div>
            </div>
            </React.Fragment>
        );
    }
}

export default WeatherTitle;