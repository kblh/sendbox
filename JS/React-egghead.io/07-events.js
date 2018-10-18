const rootElement = document.getElementById('root');

const state = {
  eventCount: 0,
  username: '',
}

function App() {
  return(
    <div>
      <h2>Events: {state.eventCount}</h2>
      <div>
        <button onClick={increment}>click me</button>
      </div>
      <p>Username: {state.username}</p>
      <p>
        <input onChange={updateUsername} />
      </p>
    </div>
  )
}

function increment() {
  setState({
    eventCount: state.eventCount + 1,
  })
}

function updateUsername(event) {
  setState({
    username: event.target.value,
  });
  increment();
}

// setState({
//   eventCount: 10,
//   username: 'Mirek',
// })

function setState(newState) {
  Object.assign(state, newState);
  renderApp();
}

function renderApp() {
  ReactDOM.render(
    <App />,
    rootElement
  );
}

renderApp();


