import { RECEIVE_CITY } from '../actions/city_actions';
import merge from 'lodash/merge';


const currentCityReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_CITY:
            return action.city
        default:
            return state;
    }



};


export default currentCityReducer;