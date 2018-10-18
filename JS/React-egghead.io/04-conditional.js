const rootElement = document.getElementById('root');

// const Message = props => <div>{props.children}</div>

function Message({children}) {
  return (
    <div>
      {
        children ? (
          <div>{children}</div>
        ) : (
          <div>... no message ...</div>
        )
      }
    </div>
  )
}

const element = (
  <h1 className="container">
    <Message children="Nazdárek" />
    <Message>Kašpárek</Message>
    <Message />
  </h1>
)

ReactDOM.render(
  element,
  rootElement
);

