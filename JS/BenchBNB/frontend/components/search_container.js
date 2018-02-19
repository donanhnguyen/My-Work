import {connect} from 'react-redux';

import Search from './search';
import {fetchBenches, deleteBench} from '../actions/bench_actions';

const mapStateToProps = (state) => ({
    benches: Object.keys(state.entities.benches).map(key => state.entities.benches[key]),
    currentUser: Boolean(state.session.currentUser)
});

const mapDispatchToProps = (dispatch) => ({

    fetchBenches: () => dispatch( fetchBenches() ),
    deleteBench: (bench) => dispatch( deleteBench(bench) )
});


const SearchContainer = connect(mapStateToProps, mapDispatchToProps)(Search);


export default SearchContainer;