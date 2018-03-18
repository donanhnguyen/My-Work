import {RECEIVE_CURRENT_USER, RECEIVE_ERRORS} from '../actions/session_actions';
import merge from 'lodash/merge';

const nullUser = Object.freeze({
    currentUser: null,
    errors: []
  });

const sessionReducer = (state = nullUser, action) => {
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_CURRENT_USER:
            const currentUser = action.currentUser;
            const newState = merge({}, state, {currentUser: currentUser} );
            return newState;
        default:
            return state;
    }



};

export default sessionReducer;