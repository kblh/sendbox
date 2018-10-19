import React, { Component } from 'react';
import Header from './components/Header';
import Menu from './components/Menu';
// import ImageSlider from './components/ImageSlider';
// import TodoList from "./components/TodoList";
import { BrowserRouter, Route, Switch } from "react-router-dom";
// import ImageSliderPage from './pages/ImageSliderPage'
import HomePage from './pages/HomePage';
import SimpleFormPage from './pages/SimpleFormPage';
import ErrorPage from './pages/ErrorPage';
import ImageSliderPage from './pages/ImageSliderPage'
import TodoListPage from './pages/TodoListPage';
import FetchRandomUserPage from './pages/FetchRandomUserPage'


// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <Header className="App-header bg-primary" />
//         <div className="p2">
//           <SimpleForm />
//         </div>
//       </div>
//     );
//   }
// }

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
              <Route component={ErrorPage} />
            </Switch>
          </div>


          {/* <h2>TodoList</h2>
          <div className="p2">
            <TodoList />
          </div>
          <h2>ImageSlider</h2>
          <div className="p2">
            <ImageSlider />
          </div> */}
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
