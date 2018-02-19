import React from 'react';

import {withRouter} from 'react-router-dom'


class BenchForm extends React.Component {

    constructor (props) {
        super(props);
        this.state = {
            description: '',
            lat: '',
            lng: '',
            number_of_seats: ''
        }

    }

    redirectBack () {
        console.log(this.props.history);
        this.props.history.push("/");
    }

    submitBench (event) {
        event.preventDefault();
        const createdBench = Object.assign({}, this.state);
        this.props.createBench(createdBench);
        this.redirectBack();
    }


    update(property) {
        return (event) => this.setState({
          [property]: event.target.value
        });
    }



    render () {
      
            return (
                <div> 
                    <form onSubmit={ this.submitBench.bind(this) }>
                            <br />
                        <label>Description</label>
                        <input
                        type="text"
                        value={this.state.description}
                        onChange={this.update('description')}
                        />
                            <br />
                        <label>Number of Seats</label>
                        <input
                        type="number"
                        value={this.state.number_of_seats}
                        onChange={this.update('number_of_seats')}
                        />
                             <br />
                        <label>Latitude</label>
                        <input
                        type="number"
                        step="0.01"
                        value={this.state.lat}
                        onChange={this.update('lat')}
                        />
                             <br />
                        <label>Longitude</label>
                        <input
                        type="number"
                        step="0.01"
                        value={this.state.lng}
                        onChange={this.update('lng')}
                        />
                             <br />
                        <input type="submit" value="Submit Bench"/>
                    </form>
                </div>
            )
  

       


    }


}



export default withRouter(BenchForm);