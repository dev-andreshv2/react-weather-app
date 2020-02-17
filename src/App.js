import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import LocationList from './components/LocationList'
import {Col, Grid, Row} from 'react-flexbox-grid'
import Paper from '@material-ui/core/Paper'
import AppBar from '@material-ui/core/AppBar'
import Typography from '@material-ui/core/Typography'
import Toolbar from '@material-ui/core/Toolbar'


const cities =[
    "Bogota,co",
    "Cali,co",
    "Barranquilla,co",
    "Madrid,es"
]

class App extends Component {
  
  handledSelectionLocation= city=>{
      console.log("handledSelectionLocation",city);
  }

  render(){

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
              <LocationList cities={cities} onSelectedLocation ={this.handledSelectionLocation}></LocationList>
          </Col>
          <Col xs={12} md={6}>
            <Paper elevation={4}>
              <div className="details"></div>
            </Paper>
            
          </Col>
        </Row>

        </Grid>    
      );
  

  }
  


}

export default App;
