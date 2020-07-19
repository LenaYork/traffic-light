import React from 'react';
import './App.css';
import {TrafficLights} from './Components/TrafficLights';
import {Control} from './Components/Control';

const colors = ['red', 'yellow', 'green']

function App() {

  // const text = [
  //   '1st button', '2nd button', '3rd button', '4th button'
  // ]

  // const buttonColors = [
  //   'pink', 'purple', 'silver', 'orange'
  // ]

  const buttonConfig = [
    {
      text: '1st button',
      color: 'pink'
    },
    {
      text: '2nd button',
      color: 'purple'
    },
    {
      text: '3rd button',
      color: 'silver'
    },
    {
      text: '4th button',
      color: 'orange'
    },
  ]

  

return (
    <div className="App">
      <header>
        <h1>Traffic Light</h1>
     </header>

     <div className="main">
      <TrafficLights colors={colors} />
      <Control buttons={buttonConfig}/>
     </div>
    </div>
  );
}

export default App;