import React from 'react';
import useFetch from './useFetch'; // Import the custom hook

function Users() {
  const { data, loading, error } = useFetch('https://jsonplaceholder.typicode.com/users');

  if (loading) return <p>Loading users...</p>;
  if (error) return <p>Error fetching users: {error.message}</p>;

  return (
    <ul>
      {data.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}

export default Users;
