import react from 'react';
import Card from './card.jsx';

function App() {
  return (
    <div className="App">
      <h1>Hello, World!</h1>
      {Card()}//you are calling the function directly which is not the correct 
      way to render a component in React. Instead, you should use the component as 
      a JSX element like this: <Card />.
      {Card()}
      <Card />this is JSX syntax for rendering a React component. When you use <Card />, 
React will create an instance of the Card component and render it in the DOM. 
This is the correct way to render a component in React.
    </div>
  );
}

export default App;