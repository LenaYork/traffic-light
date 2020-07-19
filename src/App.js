import React from 'react';
import './App.css';
import {TrafficLights} from './Components/TrafficLights';
import {Control} from './Components/Control';

function App() {

  const text = [
    '1st button', '2nd button', '3rd button', '4th button'
  ]

  const buttonColors = [
    'pink', 'purple', 'silver', 'orange'
  ]

  

return (
    <div className="App">
      <header>
        <h1>Traffic Light</h1>
     </header>
     <div class="main">
      <TrafficLights />
      <Control text={text} color={buttonColors}/>
    </div>
    </div>
  );
}

export default App;
