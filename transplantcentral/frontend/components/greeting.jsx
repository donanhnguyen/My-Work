import React from 'react';


import {
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter
  } from 'react-router-dom';


class Greeting extends React.Component {


    render () {
        return (
            <div className="greeting-container">
    
                    
                <h1>Welcome to TransplantCentral</h1>
                <p>Where you can review your favorite city</p>
             
                
            </div>
        )
    }



}

export default Greeting;