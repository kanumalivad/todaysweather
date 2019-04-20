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
        this.state = {
            isActive : Array(7).fill(false)
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(i) {
        const isActive = Array(7).fill(false);
        isActive[i] = !this.state.isActive[i];
        this.setState({isActive: isActive});
    }

    render() {
        return(
            <div className="weekday-wrap">
                <WeekDay isActive={this.state.isActive[0]} day="Saturday" temprature="31" onClick={() => this.handleClick(0)} icon={cloudyDay}/>
                <WeekDay isActive={this.state.isActive[1]} day="Sunday" temprature="30" onClick={() => this.handleClick(1)} icon={cloudyNight}/>
                <WeekDay isActive={this.state.isActive[2]} day="Monday" temprature="28" onClick={() => this.handleClick(2)} icon={Day}/>
                <WeekDay isActive={this.state.isActive[3]} day="Tuesday" temprature="26" onClick={() => this.handleClick(3)} icon={Rainy}/>
                <WeekDay isActive={this.state.isActive[4]} day="Wednesday" temprature="25" onClick={() => this.handleClick(4)} icon={Night}/>
                <WeekDay isActive={this.state.isActive[5]} day="Thusday" temprature="24" onClick={() => this.handleClick(5)} icon={Cloudy}/>
                <WeekDay isActive={this.state.isActive[6]} day="Friday" temprature="20" onClick={() => this.handleClick(6)} icon={Snowy}/>
            </div>
        );
    }
}

export default WeatherFeed;