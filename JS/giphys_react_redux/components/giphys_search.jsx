import React from 'react';

import GiphysIndex from './giphys_index';



class GiphysSearch extends React.Component {

    constructor (props) {
        super(props);
        this.state = {searchTerm: ""};

    }

    handleSubmit (event) {
        event.preventDefault();
        this.props.fetchSearchGiphys(this.state.searchTerm);
    }

    update (event) {
        this.setState({searchTerm: event.currentTarget.value});
    }


    render () {
       
       return (
            <div>
                <h1>Giphys search bitch</h1>

                <form onSubmit={this.handleSubmit.bind(this)}>
                    <input value={this.state.searchTerm} onChange={this.update.bind(this)}/>



                    <input type="submit" value="search bitch"/>
                </form>
                
                <GiphysIndex giphys={this.props.giphys} />
               
            </div>





       )

    }



}





export default GiphysSearch;
