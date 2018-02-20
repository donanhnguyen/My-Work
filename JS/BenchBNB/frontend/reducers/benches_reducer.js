import {RECEIVE_BENCHES, RECEIVE_BENCH} from '../actions/bench_actions';
import merge from 'lodash/merge';
const benchesReducer = (state = {}, action) => {
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_BENCHES:
            return action.benches;

        case RECEIVE_BENCH:
            // return action.bench; 
            // const deletedBench = action.bench;
            // return state.filter(bench => bench.id !== deletedBench.id);
            const newBench = {[action.bench.id]: action.bench};
            return merge({}, state, newBench);
        default:
            return state;
    }


};

export default benchesReducer;