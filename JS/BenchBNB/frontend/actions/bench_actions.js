import * as BenchApiUtil from '../util/bench_api_util';

export const RECEIVE_BENCHES = 'RECEIVE_BENCHES';

export const RECEIVE_BENCH = 'RECEIVE_BENCH';

export const receiveBenches = (benches) => ({
  type: RECEIVE_BENCHES,
  benches: benches  
});

export const receiveBench = (bench) => ({
    type: RECEIVE_BENCH,
    bench: bench

});


export const fetchBenches = () => {
    return function (dispatch) {
        BenchApiUtil.fetchBenches().then( (benches) => dispatch(receiveBenches(benches)) );
    };
};

export const createBench = (bench) => {

    return function (dispatch) {
        BenchApiUtil.createBench(bench).then( (createdBench) => dispatch( receiveBench(createdBench) ))
    }
}

export const deleteBench = (bench) => {
    return function (dispatch) {
        BenchApiUtil.deleteBench(bench.id);
    }
}