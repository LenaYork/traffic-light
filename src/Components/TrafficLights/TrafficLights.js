import React from 'react';

import { Light } from './Light';

import './TrafficLights.css';

export class TrafficLights extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeLight: '',
    };

    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick = (color) => {
    this.setState({
      activeLight: color,
    })
  }

  renderLights() {
    return this.props.colors.map(color => (
      <Light 
        key={color}
        color={color}
        activeLight={this.state.activeLight}
        handleClick={() => this.handleClick(color)}
    />
    ));
  }

  render() {
    return (
      <div className='trafficLight'>
        {this.renderLights()}
      </div>
    )
  }
}

// export default TrafficLights;