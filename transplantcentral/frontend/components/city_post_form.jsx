import React from 'react';

import ReactDOM from 'react-dom';

import {
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter,
    withRouter
  } from 'react-router-dom';

class CityPostForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            subject: '',
            content: '',
            rating: null,
            user_id: this.props.currentUser ? this.props.currentUser.id : '',
            city_id: this.props.currentCity.id,
            category_id: null,
        }
    }

    formButton () {
        // if (this.props.currentUser) {
            return (
                <div>
                    <button 
                        class="city-post-form-button"
                        onClick={this.toggleForm.bind(this)}
                        >
                        Create Review
                    </button>
                </div>
            )
        // } else {
        //     return (
        //         <div>
        //             <p>You are not logged in. To write a review, please <Link to='/login'>
        //             log in</Link> or <Link to='/signup'> sign up!</Link>
        //             </p>
        //         </div>
        //     )
        // }   
    }


    toggleForm () {
        const postForm = ReactDOM.findDOMNode(this.refs.postForm);
        postForm.classList.toggle('hide-this-shit');
    }

    submitPost (event) {
        event.preventDefault();
        const createdPost = Object.assign({}, this.state);
        this.props.createPost(createdPost);
    }

    update (field) {
        return (event) => {
            this.setState({
                [field]: event.currentTarget.value,

            })
        }
    }
   
    render () {
        return (
            <div>
                <div>
                    {this.formButton()}
                </div>


                <br />

                <div ref='postForm' class="post-form-container hide-this-shit">
                    <form onSubmit={this.submitPost.bind(this)}>
                        <label for='subject' >Subject</label>
                            <br />
                        <input class='post-subject' id='subject' type='text' onChange={this.update('subject')}/>

                                <br /><br />
                            <label>Category</label>
                                <br />
                            <select class='post-category-dropdown' ref='postCategory' onChange={this.update('category_id')}>
                                <option value="" selected disabled hidden>Choose Category</option>
                                <option value="1">Food</option>
                                <option value="2">Culture</option>
                                <option value="3">Nightlife</option>
                                <option value="4">Economy</option>
                            </select>
                                <br /><br />
                            <label>Rating</label>
                                <br />
                            <select class='post-category-dropdown' ref='postRating' onChange={this.update('rating')}>
                                <option value="" selected disabled hidden>Choose Rating</option>
                                <option value="5">5</option>
                                <option value="4">4</option>
                                <option value="3">3</option>
                                <option value="2">2</option>
                                <option value="1">1</option>
                            </select>
                                <br /><br />

                        <label for='content'>Content</label>
                            <br />
                        <textarea id='content' class='post-content' onChange={this.update('content')}></textarea>
                            
                            
                            <br /><br />
                        <input class='post-submit-button' type='submit' value='Submit Post' />
                    </form>
                </div>



            </div>
        )
    }


}

export default CityPostForm;