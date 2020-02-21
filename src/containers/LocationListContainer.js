import React, { Component } from 'react';
import {connect} from 'react-redux'
import {setCity} from '../actions'
import PropTypes from 'prop-types'
import LocationList from '../components/LocationList'

class LocationListContainer extends Component {
    render() {
        return (
                
              <LocationList 
                cities={this.props.cities} 
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
  }
  
  
  const mapDispatchToPropsActions =(dispatch)=>({
    dispatchSetCity: value =>dispatch(setCity(value))
  });


  //const AppConected = connect(null,mapDispatchToPropsActions)(App);
  export default connect(null,mapDispatchToPropsActions)(LocationListContainer);;

