import React, { Component } from 'react';
import ForecastExtended from '../components/ForecastExtended'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {getForecastDataaFromCities} from '../reducers'

class ForecastExtendedContainer extends Component {
    render() {
        const {city, forecastData}=this.props;
        return (
            <div>
              <ForecastExtended city={city} forecastData ={forecastData}></ForecastExtended>  
            </div>
        );
    }
}

ForecastExtendedContainer.propTypes={
    city:PropTypes.string.isRequired,  
    forecastData:PropTypes.array, 
}

//const mapStateToProps =({city, cities}) =>( { city, forecastData:cities[city]&&cities[city].forecastData } ) ;
const mapStateToProps =state =>( { city:state.city, forecastData:getForecastDataaFromCities(state.cities,state.city)} ) ;

export default connect(mapStateToProps, null)(ForecastExtendedContainer);