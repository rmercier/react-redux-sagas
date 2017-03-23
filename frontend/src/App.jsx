import React, { Component } from 'react';
import { Router, Route, IndexRoute, hashHistory, browserHistory } from 'react-router';
import BookList from './containers/book-list';
import BookDetail from './containers/book-detail';
import NotFound from '.components/errors/404';
import Container from 'components/container';
import AddBook from '.containers/add-book';


import aa from './utilities/api'
import image from 'images/plan.png';
export * from './app.scss';

export default class App extends Component {
  render() {
    aa();
    return (
      <Router history={hashHistory}>
        <Route path='/' component={Container}>
          <IndexRoute component={BookList} />
          <Route path='add' component={AddBook} />
          <Route path='*' component={NotFound} />
        </Route>
      </Router>
    );
  }
}
