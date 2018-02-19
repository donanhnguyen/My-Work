
import React from 'react';
import {Link} from 'react-router-dom';

class Greeting extends React.Component {
    constructor (props) {
        super(props);
    }

    logout () {
        this.props.logout();
    }

    render () {

        if (this.props.currentUser) {
            return (
                <div>
                    <h1>You are logged in as : {this.props.currentUser.username}</h1>
                    
                    <button onClick={this.logout.bind(this)}>Logout</button>
                     <br />
                    <Link to="/">Home Page</Link>
                     <br />
                    <Link to="/benches/new">Add Bench</Link>
                
                </div>
            )
        } else {
            return (
                <div>
                    <Link to="/login">Login</Link>
                    <br />
                    <Link to="/signup">Sign up!</Link>
                    <br />
                    <Link to="/">Home Page</Link>
                    <br />
                    <Link to="/benches/new">Add Bench</Link>
                </div>
            )
        }

    

    }

}

export default Greeting;