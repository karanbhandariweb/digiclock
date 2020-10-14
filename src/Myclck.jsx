import React from 'react';
import { useState } from 'react';
const Myclck = ()=>{
    let currtime=new Date().toLocaleTimeString();
    const [presenttime,newtimetime]=useState(currtime);
    const updatedTime = () =>{
        let nctime=new Date().toLocaleTimeString();
        newtimetime(nctime);
    };
    setInterval(updatedTime,1000);
    return(
        <>
        <h1>
            {presenttime}
        </h1></>
    );
}
export default Myclck;