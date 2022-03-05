
import React,{useState} from 'react'


const Counter = () => {
    const [clicks,setClicks] = useState(0);//hook


    function handleButtonCLick(event) {
        setClicks(clicks+1);
    }
    return (
        <>
            <span>You Clicked {clicks} clicks</span>
            <br/>
            <button onClick={handleButtonCLick}>Click Me!</button>
        </>
    )
};

export default Counter;