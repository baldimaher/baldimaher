import React from "react";

function App(){
    let message='hello me§§';
    let random = Math.random();
    if(random >0.5){
        message ='it is random'
    }
    return <h1 className="wrapper">{message} {random} </h1>
}
export default App
