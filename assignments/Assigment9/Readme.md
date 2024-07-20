Step-by-Step Instructions:

Create React Project (if needed):

If you don't have a React project set up, use create-react-app to create a new one:
Bash
npx create-react-app my-greeting-app
cd my-greeting-app
Use code with caution.

Create Functional Component Greeting:

Open src/App.js (or the main component file in your project).

Inside the App component (or a separate file if you prefer), define the Greeting component as a functional component using JSX syntax:

JavaScript
function Greeting(props) {
  const { name } = props; // Destructure prop for cleaner access
  return (
    <div>
      Hello, {name}!
    </div>
  );
}
Use code with caution.

This component accepts a single prop named name using destructuring for easier access within the component. It renders a div element containing the greeting message, dynamically incorporating the provided name.

Pass Props in Parent Component (App):

In the App component's render method, import the Greeting component and render it, passing the name prop with different values:

JavaScript
import React from 'react';
import Greeting from './Greeting'; // Assuming Greeting is in a separate file

function App() {
  return (
    <div>
      <h1>Greetings!</h1>
      <Greeting name="Alice" />
      <Greeting name="Bob" />
      <Greeting name="Charlie" />
    </div>
  );
}

export default App;
Use code with caution.

Run the Application:

In your terminal, start the development server:

Bash
npm start
Use code with caution.

Open http://localhost:3000 in your web browser to see the rendered output:

Greetings!
Hello, Alice!
Hello, Bob!
Hello, Charlie!
Explanation:

The Greeting component acts as a reusable template for displaying greetings with different names passed as props.
Props provide a way to customize components and make them more flexible.
You can pass various data types as props, including strings, numbers, arrays, objects, and even functions.
