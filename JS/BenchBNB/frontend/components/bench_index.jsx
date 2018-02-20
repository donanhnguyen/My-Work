import React from 'react';

import BenchIndexItem from './bench_index_item';
import {withRouter} from 'react-router-dom';

class BenchIndex extends React.Component {

    constructor (props) {
        super(props);
    }

    componentDidMount () {
        this.props.fetchBenches();
        
    }


    render () {

       const allBenches = this.props.benches.map((singleBench, index) => {
            return ( <BenchIndexItem key={index} bench={singleBench} deleteBench={this.props.deleteBench} currentUser={this.props.currentUser} />)
       })

       return (
            <div className="benches">
                
                <ul>
                    <h1>All The Benches Here:</h1>
                    {allBenches}
                </ul>
            </div>

       )



    }


}





export default BenchIndex;