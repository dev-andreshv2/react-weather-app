import React, { Component } from 'react';
import Location from './Location';
import WeatherData from './WeatherData'

import './style.css'
import {
    SUN,
    CLOUDY
} from '../../constants/weather'


const data={
    temperature:18,
    weatherState:SUN,
    humidity:23,
    wind:"18m/s"

}



/*const data2={
    temperature:35,
    weatherState:CLOUDY,
    humidity:50,
    wind:"7m/s"

}*/


const location="Buenos Aires,ar";
const api_key="6831e58c07cd64a1c39225acabc3bca0";
const url_base="http://api.openweathermap.org/data/2.5/weather";
const api_weather= `${url_base}?q=${location}&appid=${api_key}`;


class  WeatherLocation extends Component {


    constructor(){
        super();
        this.state={
          city:"Buenos aires",
          data :data
        }
    }

    getWeatherState= weather_data =>{
        return SUN;     
    }

    getData = weather_data=>{
        const {humidity, temp} =weather_data.main;
        const {speed} =weather_data.wind;
        const weatherState =this.getWeatherState(weather_data);
        const data ={
            humidity,
            temperature:temp,
            weatherState,
            wind:`${speed} m/s`,

        }
        return data;
    }


    handleUpdateClick=()=>{
        console.log("actualizado =>",api_weather);

        fetch(api_weather).then(
            resolve =>{
               return resolve.json();
            }
        ).then(data=>{
            console.log(data);
            const newWeather = this.getData(data);
            console.log(newWeather);

            this.setState({data:newWeather});
        });

        /*this.setState({
            city:"Barcelona",
            data :data2
        });*/

    }

    render(){
        const {city,data}=this.state;
        return (
        <div className="weatherLocationCont">
            <Location city={city}></Location>
            <WeatherData data={data}></WeatherData>
            <button onClick={this.handleUpdateClick}>Actualizar</button>
        </div>
        )
    };




}

export default WeatherLocation;