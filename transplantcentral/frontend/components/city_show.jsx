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

class CityShow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentCategory: null,
            currentCategoryId: null
        }
        
    }

 
    changeCategory (event) {
        event.preventDefault();
        this.setState({
            currentCategory: event.currentTarget.innerHTML,
            currentCategoryId: event.currentTarget.getAttribute('id')
        })
      
    }

    componentDidMount () {

        const {fetchCity, fetchCategories} = this.props;

        fetchCity(this.props.match.params.city_id);
        
        fetchCategories();

    }



    render () {

        const {currentCity, categories} = this.props;

        const all_categories = categories.map((category) => {
            return <li 
                class='post-tab' 
                onClick={this.changeCategory.bind(this)}
                id={`${category.id}`}
                tabIndex={`${category.id}`}
                >
                {category.name}
            </li>
        });
 
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
                        <CityPostFormContainer currentCategoryId={this.state.currentCategoryId}
                        currentCityObject={currentCity}/>
                    </div>


                    <div class='post-tabs'>
                        <ul>
                            {all_categories}
                        </ul>
                        
                    </div>
                     
                </div>


            

            )

       

      

    }





}




export default withRouter(CityShow);