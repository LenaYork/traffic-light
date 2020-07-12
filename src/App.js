import React from 'react';
import './App.css';
import {TrafficLights} from './Components/TrafficLights';

const colors = ['red', 'yellow', 'green']

function App() {
  return (
    <div className="App">
      <header>
        <h1>Traffic Light</h1>
     </header>
     <div className="main">
      <TrafficLights colors={colors} />
      {/* <TrafficLights colors={['red', 'yellow', 'green', 'pink']} /> */}
      </div>
    </div>
  );
}

export default App;