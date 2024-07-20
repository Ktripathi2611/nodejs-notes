import React, { useState, useEffect } from 'react';

function UserSearch() {
  const [query, setQuery] = useState('');
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      if (!query) return; // Skip fetch if query is empty
      const response = await fetch(`https://api.github.com/users/${query}`);
      if (response.ok) {
        const data = await response.json();
        setUser(data);
      } else {
        setUser(null); // Set user to null on error
      }
    };

    fetchData();
  }, [query]); // Dependency array ensures fetch only on query change

  const handleChange = (event) => setQuery(event.target.value);

  return (
    <div>
      <input type="text" value={query} onChange={handleChange} />
      {user ? (
        <div>
          <h2>{user.name}</h2>
          <img src={user.avatar_url} alt="Avatar" />
        </div>
      ) : (
        <p>No user found.</p>
      )}
    </div>
  );
}

export default UserSearch;
