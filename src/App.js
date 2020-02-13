import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import LocationList from './components/LocationList'


const cities =[
    "Bogota,co",
    "Cali,co",
    "Barranquilla,co",
    "Madrid,es"
]

class App extends Component {
  
  render(){

    return (
      <div className="App">
        <LocationList cities={cities}></LocationList>
      </div>
    );
  

  }
  


}

export default App;
