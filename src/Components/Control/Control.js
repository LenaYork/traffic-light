import React from 'react';
import './Control.css';
import {Button} from './Button';
// import {Timer} from './Timer';

// const text = [
//     '1st button', '2nd button', '3rd button', '4th button'
// ]

// let buttonElements = text.map(elem => <Button text = {elem} />)

// let buttonElements = props.text.map(elem => <Button text = {elem} />)
export class Control extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        console.log(props);
    }

//    renderButtonElements = () => this.props.text.map(elem => <Button text={elem} />)
    // renderButtonElements = () => this.props.color.map(elem => <Button color={elem} text="bla"/>);
    renderButtonElements = () => this.props.buttons.map(
        elem => <Button color={elem.color} text={elem.text} />
    );

    render() {
    return(
        <div className='control-container'>
            <p>Here will lay buttons and timer</p>
            {/* <Button text='1st button'/>
            <Button text='2nd button'/>
            <Button text='3rd button'/>
            <Button text='4th button'/> */}
            {this.renderButtonElements()}


        </div>
        )
    }
    
}



