const rootElement = document.getElementById('root');

const Message = props => <div>{props.children}</div>

const element = (
  <h1 className="container">
    <Message children="Nazdárek" />
    <Message>Kašpárek</Message>
  </h1>
)

ReactDOM.render(
  element,
  rootElement
);

