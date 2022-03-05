
import React from 'react'

const sayHello = () =>{
    return console.log("hello");
};


class Button extends React.Component {
    constructor(){
        super();
        this.state = {counter:0};
    }

    handleButtonClick =()=>{
        this.setState({counter:1})
    }


    render(){
        return <button onClick={this.handleButtonClick}>{this.state.counter}</button>;
    }
}


export default Button;