import React, { Component } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress'
import Location from './Location';
import WeatherData from './WeatherData'
import transformWeather from '../../services/transformWeather'
import {api_weather} from '../../constants/api_url'



import './style.css'
import {
    SUN,
    CLOUDY
} from '../../constants/weather'





class  WeatherLocation extends Component {


    constructor(){
        super();
        this.state={
          city:"Buenos aires",
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
        console.log("actualizado =>",api_weather);

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
        return (
        <div className="weatherLocationCont">
            <Location city={city}></Location>
            {data ?<WeatherData data={data}></WeatherData>:<CircularProgress/>}
            
        </div>
        )
    };



}

export default WeatherLocation;

//<button onClick={this.handleUpdateClick}>Actualizar</button>