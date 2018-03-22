import React from 'react';


import {
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter,
    withRouter
  } from 'react-router-dom';

import CityPostFormContainer from './city_post_form_container';

import PostsDisplayContainer from './posts_display_container';

class CityShow extends React.Component {
    constructor(props) {
        super(props); 
    }


    componentDidMount () {

        const {fetchCity, fetchCategories} = this.props;
        fetchCity(this.props.match.params.city_id);
        
    }



    render () {

        const {currentCity} = this.props;

        const profilePicClass = currentCity.name ? currentCity.name.split(' ').join('') + "Page" : null;
    
            return (
                <div>
                    
                    <div class="city-profile-header">
                        <h1>{currentCity.name}</h1>
                    </div>

                   <div class={`city-profile-pic ${profilePicClass}`}>

                    </div>

                    <br />

                    <div>
                        <CityPostFormContainer
                        currentCityObject={currentCity}/>
                    </div>

                    <PostsDisplayContainer />
                     
                </div>


            

            )

       

      

    }





}




export default withRouter(CityShow);