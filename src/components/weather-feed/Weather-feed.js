import React from 'react';
import './weather-feed.scss';
import WeekDay from '../week-day/WeekDay';

class WeatherFeed extends React.Component {

    render() {
        return(
            <div className="weekday-wrap">
                {
                    this.props.forecast.map( (day, index) => {
                        return <WeekDay key={index} isActive={this.props.active[index]} day={day.day} temprature={day.temp_c} onClick={() => this.props.onClick(index)} icon={day.icon}/>
                    } )
                }
            </div>
        );
    }
}

export default WeatherFeed;