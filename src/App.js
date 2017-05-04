import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to Responsive!</h2>
        </div>
        <div className="item-container">
          <h3>Load me in a mobile phone!</h3>
          <div className="item-middle-div">
            <div className="col-md-4">
              <img className="item-img" src="img/hotel.jpg"/>
              <div className="item-label-container">
                <div className="item-label">Hotels</div>
              </div>
              <div className="item-label-opacity"/>
            </div>
          </div>
          <div className="col-md-4">
            <img className="item-img" src="img/shop.jpg"/>
            <div className="item-label-container">
              <div className="item-label">Shops</div>
            </div>
            <div className="item-label-opacity"/>
          </div>
          <div className="col-md-4">
            <img className="item-img" src="img/fitness.jpg"/>
            <div className="item-label-container">
              <div className="item-label">Fitness</div>
            </div>
            <div className="item-label-opacity"/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
