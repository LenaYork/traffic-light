import React from 'react';
import './TrafficLights.css';

export class TrafficLights extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  } 

  render() {
    return(
      <div className='trafficLight'>
        <p>Тут будуць кружочки</p>
      </div>
    )
  }
}

// export default TrafficLights;