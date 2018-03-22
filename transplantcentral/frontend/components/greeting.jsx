import React from 'react';


import {
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter
  } from 'react-router-dom';


class Greeting extends React.Component {


    currentUserHeading () {
        if (this.props.currentUser) {
            return <p>You are logged in as: {this.props.currentUser.username}</p>
        }
    }

    render () {

        return (
            <div>
                {this.currentUserHeading()}

                <div className="greeting-container">
                    <h1>Welcome to TransplantCentral</h1>
                    <p>Where you can review your favorite city</p>
                </div>

            </div>
        )
    }



}

export default Greeting;