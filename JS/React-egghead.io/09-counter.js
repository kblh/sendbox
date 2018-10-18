const rootElement = document.getElementById('root');

class Counter extends React.Component {
  state = {
    count: 0,
  }

  handleClick = () => {
    this.setState(({count}) => ({
      count: count + 1,
    }))
  }

  render() {
    return(
      <button onClick={this.handleClick}>
        {this.state.count}
      </button>
    )
  }
}



function App() {
  return(
    <div>
      <h1>Counter</h1>
      <Counter />
    </div>
  )
}

function renderApp() {
  ReactDOM.render(
    <App />,
    rootElement
  );
}

renderApp();


