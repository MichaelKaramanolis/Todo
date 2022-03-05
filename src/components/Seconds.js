
import React, { useState, useEffect } from 'react'


// class Seconds extends React.Component {
//     constructor() {
//         super();
//         this.state = { counter: 0 };

//     }
//     componentDidMount() {
//         this.timer = setInterval(() => {
//             this.setState({ counter: this.state.counter + 1 })
//         }, 1000);
//     }

//     componentWillUnmount() {
//         clearInterval(this.timer);
//     }

//     handleButtonClick = () => {
//         this.setState({ counter: 1 })
//     }


//     render() {
//         return <span>{this.state.counter}</span>;
//     }
// }

const Seconds = () => {

    const [counter, setCounter] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCounter((counter) => counter + 1);
        }, 5000);

        return () =>{
            clearInterval(timer);    
        };
    }, []);

useEffect(()=>{
    console.log("every tie")

    return ()=>{
        console.log("Called before the render of the next update");
    }
},[counter])


    return (
        <span>{counter}</span>
    )
}

export default Seconds;