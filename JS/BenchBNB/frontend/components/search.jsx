import React from 'react';

import BenchMap from './bench_map';
import BenchIndex from './bench_index';

class Search extends React.Component {
    constructor (props) {
        super(props);
    }

   
    render () {
        return (
            <div className="bench-shit">
                <BenchMap benches={this.props.benches} fetchBenches={this.props.fetchBenches}/>
                <BenchIndex 
                    benches={this.props.benches} 
                    fetchBenches={this.props.fetchBenches} 
                    deleteBench={this.props.deleteBench}
                    currentUser={this.props.currentUser}
                />
            </div>
        )
    }

}

export default Search;