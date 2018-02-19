import {connect} from 'react-redux';

import BenchForm from './bench_form';

import {createBench} from '../actions/bench_actions';

const mapStateToProps = (state) => ({

    
});


const mapDispatchToProps = (dispatch) => ({

    createBench: (bench) => dispatch( createBench(bench) ),

});

const BenchFormContainer = connect(mapStateToProps, mapDispatchToProps)(BenchForm);

export default BenchFormContainer