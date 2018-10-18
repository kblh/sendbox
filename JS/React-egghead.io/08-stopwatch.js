const rootElement = document.getElementById('root');

class StopWatch extends React.Component {
  state = {
    lapse: 0,
    running: false,
  }

  handleRunClick = () => {
    this.setState(state => {
      if (state.running) {
        clearInterval(this.timer)
      } else {
        const startTime = Date.now() - this.state.lapse;
        this.timer = setInterval(() => {
          this.setState({
            lapse: Date.now() - startTime
          }, () => {
            // callback
            // console.log(this.state.lapse);
          })
        })
      }
      return {running: !state.running}
    })

  }

  handleClearClick = () => {
    clearInterval(this.timer)
    this.setState({
      lapse: 0,
      running: false,
    })
  }

  // componentWillUnmount() {
  //   clearInterval(this.timer)
  // }

  render() {
    const {lapse, running} = this.state
    return(
      <div>
        <h2><label>{lapse}ms</label></h2>
        <p><button onClick={this.handleRunClick}>{running ? 'Stop' : 'Start'}</button></p>
        <p><button onClick={this.handleClearClick}>Clear</button></p>
      </div>
    )
  }
}


function App() {
  return(
    <div>
      <h1>Stopwatch</h1>
      <StopWatch />
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


