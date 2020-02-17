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
        const url_forecast = `${url_base}?q=${this.props.city}&appId=${api_key}`;
        fetch(url_forecast).then(
            data=>(data.json())
        ).then(
            weatherData =>{
                console.log(weatherData);
                const forecastData = transformForecast(weatherData);
                //this.setState({forecastData:forecastData} );
                //this.setState({forecastData} );
            }
        );
    }



    renderForecastDays(){
        return "render items ";
        /*return days.map(day=>(
            <ForecastItem weekDay ={day} hour={10} data={data}></ForecastItem>
        ));*/
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
                    this.renderForecastDays():
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