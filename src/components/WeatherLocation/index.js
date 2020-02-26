import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import CircularProgress from '@material-ui/core/CircularProgress'
import Location from './Location';
import WeatherData from './WeatherData'




import './style.css'





const  WeatherLocation =({onWeatherLocationClick, city, data})=>(

        <div className="weatherLocationCont" onClick={onWeatherLocationClick}>
            <Location city={city}></Location>
            {data ?<WeatherData data={data}></WeatherData>:<CircularProgress/>}
        </div>

);

WeatherLocation.propTypes ={
    city:PropTypes.string.isRequired,   
    onWeatherLocationClick:PropTypes.func,
}

export default WeatherLocation;

//<button onClick={this.handleUpdateClick}>Actualizar</button>