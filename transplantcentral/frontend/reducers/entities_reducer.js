import {combineReducers} from 'redux';

import sessionReducer from './session_reducer';
// import errorsReducer from './errors_reducer';

import citiesReducer from './cities_reducer';

import currentCityReducer from './city_reducer';
import categoriesReducer from './categories_reducer';
import postsReducer from './posts_reducer';


const entitiesReducer = combineReducers({
    cities: citiesReducer,
    currentCity: currentCityReducer,
    categories: categoriesReducer,
    posts: postsReducer
})

export default entitiesReducer;