import {combineReducers} from 'redux';
import {city} from './city';
import {cities} from './cities'
import {getForecastDataaFromCities as  _getForecastDataaFromCities} from '../reducers/cities'

export default combineReducers({
    city, 
    cities
})


export const getForecastDataaFromCities =state =>(_getForecastDataaFromCities (state.cities , state.city))