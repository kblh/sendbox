const rootElement = document.getElementById('root');

// const greeting = React.createElement(
//   'h1',
//   {
//     classNeme: 'my-greeting',
//     children: 'Nazdárek kašpárek',
//   });

const hello = 'Zdarec ... mazec';
const myClass = 'my-class--';

const props = {
  className: 'container',
  children: 'pokus pokus pokus pokus pokus pokus',
}

const greeting = 
  <div>
    <h1 className={myClass + 'greetings'}>{hello}</h1>
    <hr />
    <h3 {...props} className="overrideClass" />
    <p className={myClass + 'paragraph'}>Voluptate laboris magna ipsum dolore nulla quis ullamco dolore sit aute. Amet nulla in cillum id Lorem. Cupidatat adipisicing cupidatat voluptate elit exercitation labore. Deserunt laboris Lorem adipisicing qui sint dolor labore aliqua velit. Magna amet nisi ex est ea aute consectetur aliqua magna veniam Lorem. Deserunt culpa incididunt ipsum sunt. Officia deserunt Lorem sint ea in aliqua eu cupidatat ad minim eu excepteur nisi.</p>
  </div>
;

ReactDOM.render(
  greeting,
  rootElement
);

