import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import WeatherLocation from './WeatherLocation';
import './style.css'






const LocationList = ({cities,onSelectedLocation}) =>{

    const handledWeatherLocationClick =city =>{
            console.log("handledWeatherLocationClick");
            onSelectedLocation(city);
    }

    console.log("Todas las ciudades ....");
    const strToComponents = cities =>(
        cities.map((city, index)=>
                

            <WeatherLocation 
         
                key={city.key} 
                city={city.name}
                onWeatherLocationClick={()=>handledWeatherLocationClick(city.name)}
                data={city.data}
            />)   
    );
    

    return (
        <div className="locationList">
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
    onSelectedLocation:PropTypes.func,
}


export default LocationList;

