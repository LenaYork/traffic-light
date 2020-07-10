import React from 'react';
import './App.css';
import {TrafficLights} from './Components/TrafficLights';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Traffic Light</h1>
     </header>
     <div class="main">
      <TrafficLights />
    </div>
    </div>
  );
}

export default App;
