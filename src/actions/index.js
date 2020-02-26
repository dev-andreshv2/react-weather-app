
import transformForecast from '../services/transformForecast'
import transformWeather from '../services/transformWeather'
import getUrlWeatherByCity from '../services/getUrlWeatherByCity';



export const SET_CITY ='SET_CITY';
export const SET_FORECAST_DATA= 'SET_FORECAST_DATA';
export const SET_WEATHER= 'SET_WEATHER';
export const GET_WEATHER_CITY= 'GET_WEATHER_CITY';
export const SET_WEATHER_CITY= 'SET_WEATHER_CITY';




/*export const setCity = (value)=>(
    { type:SET_CITY, value }
)*/

const setCity = (value)=>(
    { type:SET_CITY, value }
);

const setForecastData= (payload) =>(
    { type:SET_FORECAST_DATA, payload }
);

const getWeatherCity= (payload) =>(
    { type:GET_WEATHER_CITY, payload }
);

const setWeatherCity= (payload) =>(
    { type:SET_WEATHER_CITY, payload }
);






const api_key="6831e58c07cd64a1c39225acabc3bca0";
const url_base="http://api.openweathermap.org/data/2.5/forecast";



//middleware
export const setSelectedCity = (payload)=>{
    
    
    return dispatch =>{

        dispatch(setCity(payload));

        const url_forecast = `${url_base}?q=${payload}&appId=${api_key}`;
        return fetch(url_forecast).then(
            data=>(data.json())
        ).then(
            weatherData =>{
                const forecastData = transformForecast(weatherData);
                console.log("forecastData",forecastData);
                //this.setState({forecastData} ); //Simplificado
                dispatch(setForecastData({city:payload,forecastData }));
            }
        );
    }
}



export const setWeather=payload =>{
    
    
    return dispatch => {
        
        payload.forEach(city=>{
            console.log("informacion de ka ciudad en setWeather->"+city);
            
            dispatch(getWeatherCity(city));

            const api_weather =    getUrlWeatherByCity(city);  
            fetch(api_weather).then(
                resolve =>{
                return resolve.json();
                }
            ).then(data=>{
                
                console.log("Resultado peticion al servidor  :",data);
                const weather = transformWeather(data);
                dispatch(setWeatherCity({city,weather}));
            });


        })
        
        
        
    }



}