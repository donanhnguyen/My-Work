import merge from 'lodash/merge';

import {RECEIVE_CURRENT_USER, RECEIVE_ERRORS} from '../actions/session_actions';

const nullUser = Object.freeze({
    // currentUser: null,
    errors: []
  });

const sessionErrorsReducer = (state = [], action) => {

    switch(action.type) {
        case RECEIVE_CURRENT_USER:
            // return action.errors;
            return merge({}, state, { errors: [] } )
        case RECEIVE_ERRORS:
            // return action.errors;
            return merge({}, state, {errors: action.errors} )
        default:
            return state
    }


};

export default sessionErrorsReducer;