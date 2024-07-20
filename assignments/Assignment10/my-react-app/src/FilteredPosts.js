import React, { useState } from 'react';
import useFetchWithParams from './useFetchWithParams'; // Import the custom hook

function FilteredPosts() {
  const [userId, setUserId] = useState('');
  const { data, loading, error } = useFetchWithParams('https://jsonplaceholder.typicode.com/posts', { userId });

  const handleFetch = () => {
    setUserId(userId.trim()); // Trim input before fetching
  };

  if (loading) return <p>Loading posts...</p>;
  if (error) return <p>Error fetching posts: {error.message}</p>;

  return (
    <div>
      <input type="text" value={userId} onChange={(e) => setUserId(e.target.value)} placeholder="Enter user ID" />
      <button onClick={handleFetch}>Filter Posts</button>
      {data && (
        <ul>
          {data.map((post) => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default FilteredPosts;
