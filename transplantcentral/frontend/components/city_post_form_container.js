import {connect} from 'react-redux';

import CityPostForm from './city_post_form';

import {fetchCity} from '../actions/city_actions';

import {fetchCategories} from '../actions/category_actions';

import {createPost} from '../actions/post_actions';

const mapStateToProps = (state) => ({
    currentUser: state.session.currentUser,
    currentCity: state.entities.currentCity,
});

const mapDispatchToProps = (dispatch) => ({
    fetchCity: (city_id) => dispatch( fetchCity(city_id) ),
    fetchCategories: () => dispatch(fetchCategories()),
    createPost: (post) => dispatch(createPost(post))
});

const CityPostFormContainer = connect(mapStateToProps, mapDispatchToProps)(CityPostForm);

export default CityPostFormContainer;