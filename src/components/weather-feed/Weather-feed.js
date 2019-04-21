import React from 'react';
import './weather-feed.scss';
import WeekDay from '../week-day/WeekDay';


import cloudyDay from '../../assets/amcharts_weather_icons_1.0.0/animated/cloudy-day-3.svg';
import cloudyNight from '../../assets/amcharts_weather_icons_1.0.0/animated/cloudy-night-3.svg';
import Cloudy from '../../assets/amcharts_weather_icons_1.0.0/animated/cloudy-night-3.svg';
import Day from '../../assets/amcharts_weather_icons_1.0.0/animated/day.svg';
import Night from '../../assets/amcharts_weather_icons_1.0.0/animated/night.svg';
import Rainy from '../../assets/amcharts_weather_icons_1.0.0/animated/rainy-7.svg';
import Snowy from '../../assets/amcharts_weather_icons_1.0.0/animated/snowy-6.svg';




class WeatherFeed extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="weekday-wrap">
                {
                    this.props.forecast.map( (day, index) => {
                        return <WeekDay isActive={this.props.active[index]} day={day.day} temprature={day.temp_c} onClick={() => this.props.onClick(index)} icon={day.icon}/>
                    } )
                }
            </div>
        );
    }
}

export default WeatherFeed;