import React from 'react';
import Counter from './Counter';
import Posts from './Posts';
import UserSearch from './UserSearch';
import useFetch from './useFetch'; // Import custom hook
import FilteredPosts from './FilteredPosts'; // Import custom hook

function App() {
  return (
    <div className="App">
      <h1>React Practice - Assignments</h1>

      <section>
        <h2>Question 1: Basic useState Hook</h2>
        <Counter />
      </section>

      <section>
        <h2>Question 2: Basic useEffect Hook</h2>
        <Posts />
      </section>

      <section>
        <h2>Question 3: useState and useEffect Together</h2>
        <UserSearch />
      </section>

      <section>
        <h2>Question 4: Custom Hook for Fetching Data</h2>
        <useFetch url="https://jsonplaceholder.typicode.com/users">
          {({ data, loading, error }) => (
            <div>
              {loading && <p>Loading users...</p>}
              {error && <p>Error fetching users: {error.message}</p>}
              {data && (
                <ul>
                  {data.map((user) => (
                    <li key={user.id}>{user.name}</li>
                  ))}
                </ul>
              )}
            </div>
          )}
        </useFetch>
      </section>

      <section>
        <h2>Question 5: Custom Hook with Parameters</h2>
        <FilteredPosts />
      </section>
    </div>
  );
}

export default App;
