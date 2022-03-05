
import React from 'react'


class Counter_Old extends React.Component {
    constructor(){
        super();
        this.state = {counter:0};
        
    }
    componentDidMount(){
        this.timer = setInterval(()=>{
            this.setState({counter:this.state.counter +1})
        },1000);
    }

componentWillUnmount(){
    clearInterval(this.timer);
}

    handleButtonClick =()=>{
        this.setState({counter:1})
    }


    render(){
    return <span>{this.state.counter}</span>;
    }
}


export default Counter_Old;