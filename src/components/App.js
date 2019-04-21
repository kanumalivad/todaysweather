import React from 'react';
import './app.scss';
import WeatherTitle from './weather-title/Weather-title';
import WeatherFeed from './weather-feed/Weather-feed';

import PartialyCloudyDay from '../assets/amcharts_weather_icons_1.0.0/animated/cloudy-day-2.svg';
import PartialyCloudyNight from '../assets/amcharts_weather_icons_1.0.0/animated/cloudy-night-2.svg';
import CloudyDay from '../assets/amcharts_weather_icons_1.0.0/animated/cloudy-day-3.svg';
import CloudyNight from '../assets/amcharts_weather_icons_1.0.0/animated/cloudy-night-3.svg';
import Cloudy from '../assets/amcharts_weather_icons_1.0.0/animated/cloudy.svg';
import Sunny from '../assets/amcharts_weather_icons_1.0.0/animated/day-1.svg';
import Clear from '../assets/amcharts_weather_icons_1.0.0/animated/night.svg';
import HeavyRain from '../assets/amcharts_weather_icons_1.0.0/animated/rainy-6.svg';
import PossibleRainDay from '../assets/amcharts_weather_icons_1.0.0/animated/rainy-2.svg';
import PossibleRainNight from '../assets/amcharts_weather_icons_1.0.0/animated/rainy-4.svg';
import LiteRainDay from '../assets/amcharts_weather_icons_1.0.0/animated/rainy-3.svg';
import LiteRainNight from '../assets/amcharts_weather_icons_1.0.0/animated/rainy-5.svg';
import HeavySnow from '../assets/amcharts_weather_icons_1.0.0/animated/snowy-6.svg';
import PossibleSnowDay from '../assets/amcharts_weather_icons_1.0.0/animated/snowy-2.svg';
import PossibleSnowNight from '../assets/amcharts_weather_icons_1.0.0/animated/snowy-4.svg';
import LightSnowDay from '../assets/amcharts_weather_icons_1.0.0/animated/snowy-3.svg';
import LightSnowNight from '../assets/amcharts_weather_icons_1.0.0/animated/snowy-5.svg';
import Thunder from '../assets/amcharts_weather_icons_1.0.0/animated/thunder.svg';


class App extends React.Component{

    constructor(props) {
        super(props);

        this.state = {
            currentIp : '',
            localtime : '',
            location : {
                city : 'default',
                country : 'default',
                localtime : ''
            },
            forecast : Array(7).fill({
                text : '',
                temp_c :'',
                icon : null,
                day : ''
            }),
            isActive : [
                true,false,false,false,false,false,false
            ]
        }
        this.getCurrentIp();

        this.getActive = this.getActive.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.increseTime = this.increseTime.bind(this);

        setInterval( () => this.increseTime(), 60000 );   

    }

    getCurrentIp() {
        fetch( 'https://api6.ipify.org?format=json' )
            .then( res => res.json())
                .then( data => {
                    this.setState({ currentIp : data.ip } );
                    this.getCurrentWeather(data.ip);
                })
    }

    getWeatherIcon(code, isDay) {
        if('1000' == code) {
            return isDay ? Sunny : Clear;
        }
        else if('1003' == code) {
            return isDay ? PartialyCloudyDay : PartialyCloudyNight;
        }
        else if('1006' == code) {
            return isDay ? CloudyDay : CloudyNight;
        }
        else if('1009' == code || '1030' == code || '1135' == code || '1147' == code || '1204' == code || '1207' == code ) {
            return Cloudy;
        }
        else if( '1063' == code || '1069' == code || '1150' == code || '1153' == code || '1246' == code || '1249' == code) {
            return isDay ? PossibleRainDay : PossibleRainNight;
        }
        else if( '1168' == code || '1171' == code || '1180' == code || '1183' == code || '1186' == code || '1189' == code || '1248' == code || '1147' == code || '1273' == code || '1276' == code) {
            return isDay ? LiteRainDay : LiteRainNight;
        }
        else if( (parseInt(code) >= 1192 && parseInt(code) <= 1201 )|| '1243' == code || '1246' == code || '1252' == code|| '1255' == code ) {
            return HeavyRain;
        }
        else if( '1066' == code || '1072' == code || '1114' == code || '1117' == code || '1147' == code) {
            return isDay ? PossibleSnowDay : PossibleSnowNight;
        }
        else if( ( parseInt(code) >= 1222 && parseInt(code) <= 1237 )  || '1258' == code || '1261' == code || '1264' == code || '1282' == code) {
            return HeavySnow;
        }
        else if( (parseInt(code) >= 1216 && parseInt(code) <= 1219) || '1279' == code ){
            return isDay ? LightSnowDay : LightSnowNight;
        }
        else if( '1087' == code ) {
            return Thunder;
        }


    }

    getCurrentWeather(ip) {
        fetch( `http://api.apixu.com/v1/forecast.json?key=2e726aa1bb35434fa8f202347192004&q=${ip}&days=7` )
            .then( res => res.json())
                .then( data => {
                    const forecast = [];
                    data.forecast.forecastday.map( day => {
                        const dayWeather = {
                            text : day.day.condition.text,
                            temp_c : day.day.avgtemp_c,
                            icon : this.getWeatherIcon(day.day.condition.code, true),
                            day : new Date( day.date ).toLocaleString('en-US', {weekday : "long"})
                        }
                        forecast.push(dayWeather);
                    } )
                    this.setState({
                        location : {
                        city : data.location.name,
                        country : data.location.country,
                        localtime : new Date(data.location.localtime)
                        },
                        forecast : forecast,
                    })  
                     
                                  
                })
    }

    getActive() {
        let activeDay = -1;
        this.state.isActive.map( (active, index) => {
            if(active) {
                activeDay = index;
            }
        })
        return activeDay;
    }

    handleClick(i) {
        const isActive = Array(7).fill(false);
        isActive[i] = !this.state.isActive[i];
        this.setState({isActive: isActive});
    }

    increseTime() {
        const dateandtime = new Date( this.state.location.localtime );
    
        dateandtime.setMinutes( dateandtime.getMinutes() + 1 );
        
        const location = this.state.location;
        location.localtime = dateandtime;
        
        this.setState( {
            location: location
        } )
    }
    render() {
        return(
            <div className="main"> 
                <WeatherTitle location={this.state.location} weather={this.state.forecast[this.getActive()]}/>
                <WeatherFeed forecast={this.state.forecast} active={this.state.isActive} onClick={this.handleClick}/>
            </div>
        );
    }
}

export default App;