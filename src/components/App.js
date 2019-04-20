import React from 'react';
import './app.scss';
import WeatherTitle from './weather-title/Weather-title';
import WeatherFeed from './weather-feed/Weather-feed';

function App() {
    return(
        <div className="main"> 
            <WeatherTitle />
            <WeatherFeed />
        </div>
    );
}

export default App;