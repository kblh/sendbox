// https://www.youtube.com/watch?v=I6IY2TqnPDA&index=16&list=PLN3n1USn4xlntqksY83W3997mmQPrUmqM

const rootElement = document.getElementById('root');

const getId = function () {
  // Math.random should be unique because of its seeding algorithm.
  // Convert it to base 36 (numbers + letters), and grab the first 9 characters
  // after the decimal.
  return '_' + Math.random().toString(36).substr(2, 9);
};


const Button = props => (
  <div className="form-group">
    <button className="btn btn-primary" disabled={props.disabled} onClick={props.onClick}>
      {props.label}
    </button>
  </div>
);

const Input = props => (
  <div className="form-group">
    <label>{props.label} {props.required ? <span className="c-error">*</span> : null}</label>
    <input 
      type={props.type ? props.type : "text"}
      name={props.name}
      value={props.value}
      required={props.required}
      onClick={props.onClick} 
      onChange={props.onChange} 
      className={props.error ? "input-error" : null}
    />
    {props.error ? <div className="validation-message">{props.error}</div> : null}
  </div>
);

class TodoList extends React.Component {
  state = {
    todos: []
  }

  addToto = todo => {
    this.setState({
      todos: [todo, ...this.state.todos]
    })
  }

  render() {
    return(
      <div>
        <TodoList onSubmit={this.addToto} />
      </div>
    )
  }
}


class TodoForm extends React.Component {

  state = {
    text: '',
  }

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit({
      id: getId(),
      text: this.state.text,
      complete: false
    });
  }

  // handleChange = event => {
  //   this.setState({
  //     [event.target.name]: event.target.value,
  //   })
  // }

  render() {
    return(
      <div>
        <form>
          <Input 
            label="todo"
            onChange={this.handleChange('text')}
            value={this.state.text}
          />
          <Button label="New todo" onClick={this.handleSubmit} />
        </form>
      </div>
    )
  }
}


function App() {
  return(
    <div>
      <h1>TodoForm</h1>
      <TodoForm />
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
