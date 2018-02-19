import React from 'react';
import ReactDOM from 'react-dom';

import Root from './components/root';

import * as SessionApiUtil from './util/session_api_util';
import configureStore from './store/store';

import * as BenchApiUtil from './util/bench_api_util';

import {fetchBenches} from './actions/bench_actions';

window.login = SessionApiUtil.login;
window.logout = SessionApiUtil.logout;

window.fetchBenches = fetchBenches;


document.addEventListener('DOMContentLoaded', () => {
  
  let store;

  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store  = configureStore();
  }

  window.getState = store.getState;
  window.dispatch = store.dispatch;
  
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, root);
});
