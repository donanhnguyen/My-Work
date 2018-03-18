import React from 'react';


import {
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter,
    withRouter
  } from 'react-router-dom';

  import CityPostForm from './city_post_form';

class CityShow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentCityId: null,
            currentCity: null,
            categories: null,
        }
    }



    componentDidMount () {

        const {fetchCity, fetchCategories} = this.props;

        fetchCity(this.props.match.params.id);
        
        fetchCategories();

    }

    render () {

        const {currentCity, categories} = this.props;

            console.log('fuck u');
            if (categories.length > 0) {
          
                 console.log(categories[0]);
                 
            }
           

            return (
                <div>
                    
                    <div class="city-profile-header">
                        <h1>{currentCity.name}</h1>
                    </div>

                    <div class="city-profile-pic">

                    </div>


                    <div>
 
                        <CityPostForm />
                    </div>


                    <div>
                       
                    </div>


                </div>


            

            )

       

      

    }





}




export default withRouter(CityShow);