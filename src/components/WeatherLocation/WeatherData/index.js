import React from 'react';
import WeatherExtraInfo from './WeatherExtraInfo';
import WeatherTemperature from './WeatherTemperature';
import PropTypes from 'prop-types'

import {
    CLOUD,	
    CLOUDY,	
    SUN	,
    RAIN,	
    SNOW,	
    WINDY	

} from '../../../constants/weather'

import './style.css'



const WeatherData =({data :{temperature, weatherState, humidity, wind}})=>
     (<div className="weatherDataCont">
        <WeatherTemperature temperature={temperature} weatherState={weatherState}/>
        <WeatherExtraInfo humidity={humidity} wind={wind}/>
    </div>);

WeatherData.propTypes={
    data:PropTypes.shape({
        temperature:PropTypes.number.isRequired,
        weatherState:PropTypes.string.isRequired,
        humidity:PropTypes.number.isRequired,
        wind:PropTypes.string.isRequired,
    })

}

export default WeatherData ;