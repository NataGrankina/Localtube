import React, { Component } from 'react';
import GapiInjector from 'components/gapiInjector';
import Header from 'components/header';
import Map from 'components/map';
import VideoList from 'components/youtube/videoList';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <GapiInjector />
        <Header />
        <div className="App-container">
          <div className="App-map">
            <Map />
          </div>
          <div>
            <VideoList />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
