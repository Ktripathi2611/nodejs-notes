import React from 'react';
import Greeting from './Greeting';
import UserCard from './UserCard';
import Profile from './Profile'; // Import the Profile component
import Button from './Button'; // Import the Button component

function App() {
  const users = [
    { username: 'emiway bantai', email: 'emiway@example.com', age: 30 },
    { username: 'chota don', email: 'chota@example.com', age: 25 },
    { username: 'kushal', email: 'kushal@example.com', age: 40 },
  ];

  const user = {
    name: 'window',
    email: 'kushak@example.com',
    address: {
      street: '123 23 322',
      city: 'Mumbai',
      country: 'India',
    },
  };

  return (
    <div>
      <Greeting name="emiway bantai" />
      <Greeting name="chota don" />
      <Greeting name="kushal" />
      {users.map((user) => (
        <UserCard key={user.username} {...user} />
      ))}
      <Profile user={user} /> {/* Render the Profile component */}
      <Button /> {/* Renders button with default label */}
      <Button label="Click Here" /> {/* Renders button with custom label */}
    </div>
  );
}

export default App;
