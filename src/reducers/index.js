import {combineReducers} from 'redux';
import {city} from './city';
import {cities} from './cities'
import {
    getForecastDataaFromCities as  _getForecastDataaFromCities,
    getWeatherCities as _getWeatherCities
} from './cities'


import { createSelector}  from 'reselect'


export default combineReducers({
    city, 
    cities
})



//export const getCity = createrSelector (state=> state.city, city =>city);


export const getForecastDataaFromCities =state =>(_getForecastDataaFromCities (state.cities , state.city));


export const getWeatherCities =createSelector(
    state=>state.cities,_getWeatherCities

)