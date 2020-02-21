import React, { Component } from 'react';

import logo from './logo.svg';
import './App.css';
import LocationListContainer from './containers/LocationListContainer'
import ForecastExtendedContainer from './containers/ForecastExtendedContainer'

import {Col, Grid, Row} from 'react-flexbox-grid'
import Paper from '@material-ui/core/Paper'
import AppBar from '@material-ui/core/AppBar'
import Typography from '@material-ui/core/Typography'
import Toolbar from '@material-ui/core/Toolbar'
import ForecastExtended from './components/ForecastExtended';





const cities =[
    "Bogota,co",
    "Cali,co",
    "Barranquilla,co",
    "Madrid,es"
]



//Action creator
/*const setCity = (value)=>(
  { type:'setCity', value }
)*/


class App extends Component {
  

  /*constructor(){
      super();
      //this.state={city:null}; se elimina por reducer
  }*/


  /*
  handledSelectionLocation= city=>{
      console.log("handledSelectionLocation",city);
      //this.setState({city:city});
      this.setState({city}); //simplificado por que las propiedades se llaman igual
      //store.dispatch(setCity(city));
      this.props.dispatchSetCity(city);
  }*/


  render(){
    //const {city} =this.state;  //opcional
    return (
      <Grid>
        <Row>
            <AppBar position='stycky'>
                <Toolbar>
                    <Typography variante='title' color='inherit'>
                        Weather App
                    </Typography>
                </Toolbar>
            </AppBar>
        </Row>
        
        <Row>
          <Col xs={12} md={6}>

              <LocationListContainer 
                cities={cities} 
              />

          </Col>
          <Col xs={12} md={6}>
            <Paper elevation={4}>
              <div className="details">
                  {
                     //this.state.city === null ?
                     //<div><h1>No se ha seleccionado ciudad</h1></div>
                     //:
                     <ForecastExtendedContainer />
                  }
              </div>
            </Paper>
          </Col>
        </Row>

        </Grid>    
      );
  

  }
  


}




//const componentConected = connect(null,mapDispatchToPropsActions)(App);
//const AppConected = connect(null,mapDispatchToPropsActions)(App);
export default App;