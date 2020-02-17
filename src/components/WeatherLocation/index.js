import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import CircularProgress from '@material-ui/core/CircularProgress'
import Location from './Location';
import WeatherData from './WeatherData'
import transformWeather from '../../services/transformWeather'
import getUrlWeatherByCity from '../../services/getUrlWeatherByCity';



import './style.css'
import {
    SUN,
    CLOUDY
} from '../../constants/weather'


class  WeatherLocation extends Component {


    constructor(props){
        super(props);
        const { city }  =props;
        this.state={
          city,
          data :null
        }

        console.log("constructor");

    }


    componentDidMount() {
        console.log("componentDidMount");
        
    }
    

    componentDidUpdate(prevProps, prevState) {
        console.log("componentDidUpdate");
        
    }

    
    componentWillMount() {
        console.log("UNSAFE componentWillMount");
        this.handleUpdateClick();
        
    }
    

    componentWillUpdate(nextProps, nextState) {
        console.log("UNSAFE componentWillUpdate");
    }
    
    


    handleUpdateClick=()=>{
       // console.log("actualizado =>",api_weather);
        const api_weather =    getUrlWeatherByCity(this.state.city);  
        fetch(api_weather).then(
            resolve =>{
               return resolve.json();
            }
        ).then(data=>{
            
            console.log("Resultado del click :",data);
            const newWeather = transformWeather(data);
            //console.log(newWeather);
            this.setState({data:newWeather});
            
        });


    }

    render(){

        console.log("render");
        const {city,data}=this.state;
        const {onWeatherLocationClick} =this.props;

        return (
        <div className="weatherLocationCont" onClick={onWeatherLocationClick}>
            <Location city={city}></Location>
            {data ?<WeatherData data={data}></WeatherData>:<CircularProgress/>}
            
        </div>
        )
    };



}

WeatherLocation.propTypes ={
    city:PropTypes.string.isRequired,   
    onWeatherLocationClick:PropTypes.func,
}

export default WeatherLocation;

//<button onClick={this.handleUpdateClick}>Actualizar</button>