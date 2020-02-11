import React, { Component } from 'react';
import Location from './Location';
import WeatherData from './WeatherData'

import './style.css'
import {
    SUN
} from '../../constants/weather'


const data={
    temperature:18,
    weatherState:SUN,
    humidity:23,
    wind:"18m/s"

}


class  WeatherLocation extends Component {


    render(){
        return (
        <div className="weatherLocationCont">
            <Location city={"Pamplonita"}></Location>
            <WeatherData data={data}></WeatherData>
        </div>
        )
    };

}

export default WeatherLocation;