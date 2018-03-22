
import React from 'react';

class PostsDisplay extends React.Component {
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
        this.props.fetchCategories();
    }

    render () {
        console.log(this.state.currentCategoryId);
        
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

        return (
            <div>
                <div class='post-tabs'>
                        <ul>
                            {all_categories}
                        </ul>
                        
                    </div>
            </div>
        )
    }


}


export default PostsDisplay;