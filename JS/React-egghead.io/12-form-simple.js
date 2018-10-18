// https://www.youtube.com/watch?v=fd4_IEWzYeo&list=PLN3n1USn4xlntqksY83W3997mmQPrUmqM&index=10

const rootElement = document.getElementById('root');

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

class SimpleForm extends React.Component {
  state = {
    userName: 'un',
    firstName: 'John',
    firstNameError: '',
    lastName: 'Smith',
    lastNameError: '',
    email: 'john.smith@gmail.com',
    emailError: '',
    phone: '777 123 432',
    error: false,
  }

  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state);
  }

  // handleChange = (event) => {
  //   let change = {}
  //   change[event.target.name] = event.target.value
  //   this.setState(change)

  //   // validation
  //   if(event.target.required && event.target.value == '') {
  //     console.error("toto pole je povinné")
  //   }
  // }

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });

    // validation required
    if(event.target.required && event.target.value == '') {
      let err = name + "Error";
      this.setState({ [err]: "Toto pole je povinné!" });
      this.state.error = true;
    } else {
      let err = name + "Error";
      this.setState({ [err]: "" });
      this.state.error = false;
    }

    // validation email
    if(event.target.type == "email" && event.target.value.indexOf("@") === -1) {
      let err = name + "Error";
      this.setState({ [err]: "Toto není validní e-mail!" });
      this.state.error = true;
    }
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <Input 
          label="userName"
          onChange={this.handleChange('userName')}
          value={this.state.userName}
        />
        <Input 
          label="firstName"
          onChange={this.handleChange('firstName')}
          value={this.state.firstName}
          required={true}
          error={this.state.firstNameError}
        />
        <Input 
          label="lastName"
          onChange={this.handleChange('lastName')}
          value={this.state.lastName}
          required={true}
          error={this.state.lastNameError}
        />
        <Input 
          type="email"
          label="email"
          onChange={this.handleChange('email')}
          value={this.state.email}
          required={true}
          error={this.state.emailError}
        />
        <Input 
          type="tel"
          label="phone"
          onChange={this.handleChange('phone')}
          value={this.state.phone}
        />
        <Button label="Submit" disabled={this.state.error} onClick={this.handleSubmit} />

        <hr />
        {this.state.error ? <p className="c-error">ERR</p> : null}
        <p>userName: {this.state.userName}</p>
        <p>firstName: {this.state.firstName}</p>
        <p>lastName: {this.state.lastName}</p>
        <p>phone: {this.state.phone}</p>
        <p>email: {this.state.email}</p>
      </form>
    )
  }
}


function App() {
  return(
    <div>
      <h1>SimpleForm</h1>
      <SimpleForm />
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
