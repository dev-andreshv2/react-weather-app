import {SET_FORECAST_DATA} from '../actions';
import {GET_WEATHER_CITY, SET_WEATHER_CITY} from '../actions';
import { createSelector}  from 'reselect';
import  toPairs  from 'lodash.topairs';

export const cities = (state ={}, action)=>{
    switch(action.type){
        case SET_FORECAST_DATA :
           const {city, forecastData}= action.payload;
           //return {...state, [city]:{forecastData:forecastData, weather:null}}
             return {...state, [city]:{forecastData}}

        case GET_WEATHER_CITY:{
            const city = action.payload;
            return {...state , [city]:{weather:null}};
        }

        case SET_WEATHER_CITY:{

            console.log("Action .payload ->",action.payload );
            const {city, weather} = action.payload;
            let statex = {...state , [city]:{weather}};
           
            console.log("Estado modificado ", statex);
            return statex;
        }

        default: return state;
    }

}



export const getForecastDataaFromCities =(state, city) =>( state[city]&&state[city].forecastData );



const fromObjectToArray = cities =>(
    toPairs(cities).map(
        ([key,value]) =>
        {
            console.log("fromObjectToArray-->"+key,value);
            let newObject = {key,name:key, data:value.weather};
            console.log("newObject-topairs:::",newObject);
            return (newObject)
        }
    )

 );

export const getWeatherCities =createSelector(
    state=> fromObjectToArray(state)  ,cities=>cities
);