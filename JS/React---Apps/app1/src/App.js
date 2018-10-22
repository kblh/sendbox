import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from './components/Header';
import Menu from './components/Menu';
import ErrorPage from './pages/ErrorPage';
import FetchRandomUserPage from './pages/FetchRandomUserPage';
import HomePage from './pages/HomePage';
import ImageSliderPage from './pages/ImageSliderPage';
import ReqresPage from './pages/ReqresPage';
import SimpleFormPage from './pages/SimpleFormPage';
import TodoListPage from './pages/TodoListPage';

class App extends Component {
  state = {
    count: 0
  };

  increment = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  decrement = () => {
    this.setState({
      count: this.state.count - 1
    });
  };

  render() {
    return (
      <BrowserRouter>
        <div>
          <Header className="App-header bg-primary" />
          <Menu />
          <div className="p1">
            <Switch>
              <Route path="/" component={HomePage} exact />
              <Route path="/simple-form" component={SimpleFormPage} />
              <Route path="/image-slider" component={ImageSliderPage} />
              <Route path="/todo-list" component={TodoListPage} />
              <Route path="/fetch-random-user" component={FetchRandomUserPage} />
              <Route path="/reqres" component={ReqresPage} />
              <Route component={ErrorPage} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
