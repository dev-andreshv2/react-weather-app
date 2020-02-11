import React from 'react';
import WeatherIcons from 'react-weathericons';
import PropTypes from 'prop-types';
import './style.css'

const icons ={
    
    cloud:'cloud',
    cloudy:'cloudy',
    sun:'day-sunny',
    rain:'rain',
    snow:'snow',
    windy:'windy'


}

const getWeatherIcon = weatherState =>{
    let icon = icons[weatherState];
    if(icon)
        return <WeatherIcons className="wicon" name={icon} size="2x"/>;
     else  
        return <WeatherIcons className="wicon" name={"cloudy"} size="2x"/>;
        
}


const sizeIcon="4x";


const WeatherTemperature =({temperature, weatherState})=>(
    <div className="weatherTemperatureCont">
        { getWeatherIcon(weatherState) }
        <span className="temperature">{`${temperature}`}</span>  
        <span className="temperatureType"> C'</span>
    </div>
);


WeatherTemperature.propTypes = {
    temperature:PropTypes.number.isRequired,
    weatherState:PropTypes.string.isRequired,
}



export default WeatherTemperature ;