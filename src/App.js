import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      degree: 0
    }
    this.onMouseMove = this.onMouseMove.bind(this)
  }

  onMouseMove(event) {
    let degree = Math.atan2(event.clientX, event.clientY) // range (-PI, PI]
    degree *= 180 / Math.PI
    this.setState({
      degree
    })
  }
  
  render() {

    const { degree } = this.state
    
    return (
      <div className="App">
        <div
          className="background"
          style={{
            background: `linear-gradient(${degree}deg, rgba(255, 0, 0, 0.25) 20%, rgba(255, 255, 255, 0) 80%, rgba(0, 255, 255, 0) 80%)`
          }}
          onMouseMove={this.onMouseMove}
        >
        </div>
        <div className="App-header">
          <h2>Responsive</h2>
        </div>
        <div className="item-container">
          <div style={{ color: 'lightgray' }}>Load me in a mobile phone!</div>
          <div className="item-middle-div">
            <div className="col-sm-4">
              <img className="item-img" src="img/hotel.jpg"/>
              <div className="item-label-container">
                <div className="item-label">Hotels</div>
              </div>
              <div className="item-label-opacity"/>
            </div>
          </div>
          <div className="col-sm-4">
            <img className="item-img" src="img/shop.jpg"/>
            <div className="item-label-container">
              <div className="item-label">Shops</div>
            </div>
            <div className="item-label-opacity"/>
          </div>
          <div className="col-sm-4">
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
