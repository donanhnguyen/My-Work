import {connect} from 'react-redux';
import PostsDisplay from './posts_display';
import {fetchCity} from '../actions/city_actions';

import {fetchCategories} from '../actions/category_actions';

const mapStateToProps = (state) => ({

    currentUser: state.session.currentUser,
    currentCity: state.entities.currentCity,
    categories: Object.keys(state.entities.categories).map((key) => state.entities.categories[key])
});


const mapDispatchToProps = (dispatch) => ({
    fetchCity: (city_id) => dispatch( fetchCity(city_id) ),
    fetchCategories: () => dispatch(fetchCategories()),
   
});

const PostFormContainer = connect(mapStateToProps, mapDispatchToProps)(PostsDisplay);

export default PostFormContainer;