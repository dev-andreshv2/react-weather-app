import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import WeatherLocation from './WeatherLocation';




const strToComponents = cities =>{
    console.log("cities on str",cities);
    cities.map(city =>{
        console.log("city",city);
    });
    return (
        cities.map((city, index)=><WeatherLocation key={city} city={city}/>)   
    );
}


const LocationList = ({cities}) =>{

    console.log(cities);
    return (
        <div>
            {strToComponents(cities)}
        </div>
    );

}



/*const LocationList = (cities) =>{

    console.log(cities);
    return (
        <div>
            <WeatherLocation city="Buenos Aires, ar"></WeatherLocation>
            <WeatherLocation city="Bogota, col"></WeatherLocation>
            <WeatherLocation city="Mexico, mex"></WeatherLocation>
            <WeatherLocation city="Cucuta, col"></WeatherLocation>
            <WeatherLocation city="Barcelona, esp"></WeatherLocation>
        </div>
    );

}*/

LocationList.propTypes={
    cities: PropTypes.array.isRequired,

}


export default LocationList;

