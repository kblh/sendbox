const rootElement = document.getElementById('root');

if (!Date.now) {
  Date.now = function now() {
    return new Date().getTime();
  };
}

function tick() {
  const time = Date.now();

  const element = (
    <div>
      It is:
      <div>{time}</div>
      <div>{time}</div>
      <div>{time}</div>
    </div>
  )

  ReactDOM.render(
    element,
    rootElement
  );

}

tick();
setInterval(tick, 1000);


