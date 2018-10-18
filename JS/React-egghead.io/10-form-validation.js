const rootElement = document.getElementById('root');

class NameForm extends React.Component {
  state = {
    error: this.props.getErrorMessage(''),
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const value = this.userInput.value;
    const error = this.props.getErrorMessage(value)
    // console.log({target: event.target});
    // console.log("user (with JS): " + event.target.elements.user.value);
    // console.log("user (with ref): " + this.userInput.value);

    if (error) {
      console.error(`%c error: ${error}`, `font-weight: bold; font-size: 20px;`)
    } else {
      console.log(`%c success: ${value}`, `color: #bada55; font-weight: bold; font-size: 20px;`)
    }
  }

  handleChange = event => {
    const {value} = event.target;
    this.setState({
      error: this.props.getErrorMessage(value)
    })
  }

  componentDidMount() {
    console.log("componentDidMount()");
  }


  render() {
    const {error} = this.state
    return(
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="user">User:</label>
        <input type="text" name="user" onChange={this.handleChange} ref={node => this.userInput = node} />
        <button disabled={Boolean(error)} type="submit">Submit</button>
        {error ? <div className="validation-message">{error}</div> : null}
      </form>
    )
  }
}


function App() {
  return(
    <div>
      <h1>NameForm</h1>
      <NameForm 
        getErrorMessage = {value => {
          if (value.length < 3) {
            return `Value must be at least 3 chars`
          }
          if (!value.includes('s')) {
            return `Value must include "s"`
          }
          return null
        }}
      />
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
