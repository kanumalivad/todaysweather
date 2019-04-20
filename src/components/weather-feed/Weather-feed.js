import React from 'react';
import './weather-feed.scss';
import WeekDay from '../week-day/WeekDay';

class WeatherFeed extends React.Component {
    render() {
        return(
            <div className="weekday-wrap">
                <WeekDay />
                <WeekDay />
                <WeekDay />
                <WeekDay />
                <WeekDay />
                <WeekDay />
                <WeekDay />
            </div>
        );
    }
}

export default WeatherFeed;