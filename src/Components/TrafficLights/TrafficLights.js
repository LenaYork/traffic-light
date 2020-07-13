import React from 'react';
import { Light } from './Light';
import './TrafficLights.css';

export class TrafficLights extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  } 

  render() {
    return (
      <div className='trafficLight'>
        <Light 
          id='red'
          color='red'
          isActive={false}
        />
        <Light 
          id='yellow'
          color='yellow'
          isActive={false}
        />
        <Light 
          id='green'
          color='green'
          isActive={false}
        />
      </div>
    )
  }
}

// export default TrafficLights;