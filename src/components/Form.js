import React from 'react';

class Form extends React.Component{
constructor(){
    super();
    this.state = {value:"Write your name"}
}
    handleFormSubmit =(event)=>{
        event.preventDefault();

        alert(this.state.value);
    }
    handleInputChange =(event)=>{
        this.setState({value : event.target.value});
    }
    render(){
        return (
        <>
        <form onSubmit={this.handleFormSubmit}>
            <input id="name" type="text" value={this.state.value} onChange={this.handleInputChange} />
            <input id="text" type="submit" />
        </form>
        </>
        )};
}

export default Form;