const rootElement = document.getElementById('root');
const greeting = React.createElement(
  'h1',
  {
    classNeme: 'my-greeting',
    children: 'Nazdárek kašpárek',
  });

console.log(greeting);

ReactDOM.render(
  greeting,
  rootElement
);

