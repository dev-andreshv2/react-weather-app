import React, { Component } from 'react';
import  { bindActionCreators } from 'redux';

import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import LocationList from '../components/LocationList'
import {getWeatherCities,getCity} from '../reducers'

//import {setSelectedCity,setWeather} from '../actions'
import * as actions from '../actions'

class LocationListContainer extends Component {
    

  
  componentDidMount() {
    console.log("montando informacion-------------------------------------------------------------------");
    const {setWeather, setSelectedCity, cities, city}=this.props;
    setWeather(cities);
    setSelectedCity(city);

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
        this.props.setSelectedCity(city);
    }

}


LocationListContainer.propTypes={
    setSelectedCity:PropTypes.func.isRequired,  
    cities:PropTypes.array.isRequired,
    citiesWeather:PropTypes.array,
  }
  
  /*
  const mapDispatchToPropsActions =(dispatch)=>({
    //dispatchSetCity: value =>dispatch(setCity(value))
    setSelectedCity: payload =>dispatch(setSelectedCity(payload)),
    setWeather:cities=>dispatch(setWeather(cities))
  });

  */
 const mapDispatchToPropsActions =(dispatch)=>bindActionCreators(actions, dispatch);


  
  const mapStateToProps =state=>{
  console.log("state-map", state);
  return ({
    citiesWeather:getWeatherCities(state),
    city:getCity(state)
  });
}  
;







  //const AppConected = connect(null,mapDispatchToPropsActions)(App);
  export default connect(mapStateToProps,mapDispatchToPropsActions)(LocationListContainer);;

