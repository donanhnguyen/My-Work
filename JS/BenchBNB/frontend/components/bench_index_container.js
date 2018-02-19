import {connect} from 'react-redux';

import BenchIndex from './bench_index';

import {fetchBenches, deleteBench} from '../actions/bench_actions';


const mapStateToProps = (state) => ({
    // benches: state.entities.benches
    benches: Object.keys(state.entities.benches).map(key => state.entities.benches[key])
    
});

const mapDispatchToProps = (dispatch) => ({

    fetchBenches: () => dispatch( fetchBenches() ),
   
});

const BenchIndexContainer = connect(mapStateToProps, mapDispatchToProps)(BenchIndex);

export default BenchIndexContainer;