import React from 'react';
import {withRouter} from 'react-router-dom';


class BenchIndexItem extends React.Component {

    constructor (props) {
        super(props);
    }

    removeBench (event) {
        event.preventDefault();
        console.log(this.props);
        this.props.deleteBench(this.props.bench);
        window.location.reload();
      
    }

    deleteButton () {
        if (this.props.currentUser) {
            return <button onClick={this.removeBench.bind(this)}> Delete Bench </button> 
        }
    }

    render () {

        return (
                <li> {this.props.bench.description} id: {this.props.bench.id} 

                    {this.deleteButton()}
                     
                </li>
        )

    }



}



export default withRouter(BenchIndexItem);