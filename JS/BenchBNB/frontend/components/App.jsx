import React from 'react';

import GreetingContainer from './greeting_container';

import SessionFormContainer from './session_form_container';

import {AuthRoute, ProtectedRoute} from '../util/route_util.jsx';


import BenchIndexContainer from './bench_index_container';

import SearchContainer from './search_container';

import BenchFormContainer from './bench_form_container';

import {
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter
  } from 'react-router-dom';

class App extends React.Component {
    constructor (props) {
        super(props);
    }

    render () {
        return (
            <div class="everything">
                <header>
                    <h1>Welcome to BenchBNB bitch</h1>
            
                    <GreetingContainer />
                </header>
                <AuthRoute path="/login" component={SessionFormContainer} />
                <AuthRoute path="/signup" component={SessionFormContainer} />

                <Route exact path="/" component={ SearchContainer } />
                <ProtectedRoute path='/benches/new' component={ BenchFormContainer } />
            </div>
        )
    }





}

export default App;