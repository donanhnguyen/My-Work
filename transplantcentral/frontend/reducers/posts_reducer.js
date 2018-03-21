

import {RECEIVE_POSTS, RECEIVE_POST} from '../actions/post_actions';
import merge from 'lodash/merge';


const postsReducer = (state = {}, action) => {
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_POSTS:
            return action.posts;
        case RECEIVE_POST:
            return action.post;
            // const newPost = {[action.post.id]: action.post};
            // return merge({}, state, newPost);
        default:
            return state;
    }


};

export default postsReducer