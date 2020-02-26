import React, { Component } from 'react';
import {connect} from 'react-redux'
import {setSelectedCity} from '../actions'
import PropTypes from 'prop-types'
import LocationList from '../components/LocationList'
import {setWeather} from '../actions'
import {getWeatherCities} from '../reducers'

class LocationListContainer extends Component {
    
  constructor(){
    super();
  }
  
  componentDidMount() {
    console.log("montando informacion-------------------------------------------------------------------");
    this.props.setWeather(this.props.cities);
  }


  render() {
        return (
              <LocationList 
                cities={this.props.citiesWeather} 
                onSelectedLocation ={this.handledSelectionLocation}>
              </LocationList>   
        );
    }

    handledSelectionLocation= city=>{
        console.log("Burbuja ---> handledSelectionLocation",city);
        this.props.dispatchSetCity(city);
    }

}


LocationListContainer.propTypes={
    dispatchSetCity:PropTypes.func.isRequired,  
    cities:PropTypes.array.isRequired,
    citiesWeather:PropTypes.array,
  }
  
  
  const mapDispatchToPropsActions =(dispatch)=>({
    //dispatchSetCity: value =>dispatch(setCity(value))
    dispatchSetCity: payload =>dispatch(setSelectedCity(payload)),
    setWeather:cities=>dispatch(setWeather(cities))
  });


  
  const mapStateToProps =state=>{
  
    console.log("state-map", state);
  return ({
    citiesWeather:getWeatherCities(state)
  });
}  
;







  //const AppConected = connect(null,mapDispatchToPropsActions)(App);
  export default connect(mapStateToProps,mapDispatchToPropsActions)(LocationListContainer);;

