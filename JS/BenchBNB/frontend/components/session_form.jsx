
import React from 'react';
import {Link, withRouter} from 'react-router-dom'

class SessionForm extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            username: "",
            password: ""
          };
    
    }

    handleSubmit (event) {
        event.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user)


    }


    navLink () {
        if (this.props.formType === 'login') {
            return <Link to="/signup">sign up instead</Link>;
          } else {
            return <Link to="/login">log in instead</Link>;
          }
    }

    update (field) {
       return (event) => {
           this.setState({
                [field]: event.currentTarget.value
            })
       } 
    }

    render () {
        
        return (
           <div>
            <h1> {this.props.formType} or {this.navLink()}  </h1>

            <form onSubmit={ this.handleSubmit.bind(this) }>
                <label>Username</label>
                <input type='text' value={this.state.username} onChange={this.update('username')} />

                    <br /><br />


                <label>Password</label>
                <input type='text' value={this.state.password} onChange={this.update('password')}/>

                    <br /><br />

                <input type="submit" value="Submit" />
            </form>


        </div> 
        )
        


    }








}





export default withRouter(SessionForm);