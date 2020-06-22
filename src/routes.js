import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/Main';
import Repository from './pages/Repository';

export default class Routes extends Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/repository/:repository" component={Repository} />
          </Switch>
        </BrowserRouter>
      </>
    );
  }
}
