import React,{useEffect} from 'react';

const UseEf =()=>{
   useEffect(()=>{
        console.log("hey");
   },[]);//double brackets means only render once
    return(
        <>
        <h1>Hi</h1>
        </>
    )};

export default UseEf