import React, {Component}  from 'react';
import PropTypes from 'prop-types';
import './style.css'
import ForecastItem from './ForecastItem/forecastItem';
import transformForecast from '../services/transformForecast'
/*
const days =['Lunes','Martes','Miercoles','Jueves','Viernes','Sabado','Domingo'];

const data ={
    temperature:10,
    weatherState:'CLOUD',
    humidity:'20',
    wind:'5'
}
*/





 const api_key="6831e58c07cd64a1c39225acabc3bca0";
 const url_base="http://api.openweathermap.org/data/2.5/forecast";






class ForecastExtended extends Component {


    constructor(){
        super();
        this.state={
            forecastData:null
        }
    }


    componentDidMount(){
       this.updateCity (this.props.city);
    }


    componentWillReceiveProps(nextProps){
        if(nextProps.city!==this.props.city){
            this.setState({forecastData:null});
            this.updateCity(nextProps.city);
        }        
    }


    updateCity = (city) =>{
        console.log("updateCity",city);
        const url_forecast = `${url_base}?q=${city}&appId=${api_key}`;
        fetch(url_forecast).then(
            data=>(data.json())
        ).then(
            weatherData =>{
                console.log("weatherData",weatherData);
                const forecastData = transformForecast(weatherData);
                console.log("forecastData",forecastData);
                //this.setState({forecastData:forecastData} );
                this.setState({forecastData} ); //Simplificado
            }
        );
    }




    /*componentDidMount(){
        const url_forecast = `${url_base}?q=${this.props.city}&appId=${api_key}`;
        fetch(url_forecast).then(
            data=>(data.json())
        ).then(
            weatherData =>{
                console.log("weatherData",weatherData);
                const forecastData = transformForecast(weatherData);
                console.log("forecastData",forecastData);
                //this.setState({forecastData:forecastData} );
                this.setState({forecastData} ); //Simplificado
            }
        );
    }*/



    renderForecastDays(forecastData){

        return forecastData.map(forecast=>(
            <ForecastItem 
                key= {`${forecast.weekDay}${forecast.hour}`}
                weekDay ={forecast.weekDay} 
                hour={forecast.hour} 
                data={forecast.data}>
            </ForecastItem>
        ));
    }



    renderProgress =()=>{
        return <h3>Cargando pronostico extendido</h3>;
    }

    
    render () {
        //const city =this.props.city;
        const {city} =this.props; 
        const {forecastData}=this.state;
        return (
            <div>
                <h2 className="forecast-title">Pronostico extendido para {city}</h2>
                {forecastData ?
                    this.renderForecastDays(forecastData):
                    this.renderProgress()    
                }
            </div>
        );
    }






}

ForecastExtended.propTypes ={
    city:PropTypes.string.isRequired,
}


export default ForecastExtended;