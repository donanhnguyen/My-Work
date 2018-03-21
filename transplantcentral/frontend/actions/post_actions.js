import * as PostAPIUtil from '../util/post_api_util';


export const RECEIVE_POSTS = 'RECEIVE_POSTS';
export const RECEIVE_POST = 'RECEIVE_POST';

export const receivePosts = (posts) => ({
    type: RECEIVE_POSTS,
    posts: posts
});

export const receivePost = (post) => ({
    type: RECEIVE_POST,
    post: post
});

export const fetchPosts = () => {

    return function (dispatch) {
        PostAPIUtil.fetchPosts().then((all_posts) =>  dispatch(receivePosts(all_posts))  )
    }
};

export const createPost = (post) => {

    return function (dispatch) {
        PostAPIUtil.createPost(post).then((created_post) => dispatch(receivePost(created_post)))
    }

};