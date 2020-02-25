
import transformForecast from '../services/transformForecast'


export const SET_CITY ='SET_CITY';
export const SET_FORECAST_DATA= 'SET_FORECAST_DATA';




/*export const setCity = (value)=>(
    { type:SET_CITY, value }
)*/

const setCity = (value)=>(
    { type:SET_CITY, value }
);

const setForecastData= (payload) =>(
    { type:SET_FORECAST_DATA, payload }
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