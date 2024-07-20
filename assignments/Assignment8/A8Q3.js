const axios = require('axios');

async function fetchData() {
  try {
    // Fetch data from the first API
    const postsResponse = await axios.get('https://jsonplaceholder.typicode.com/posts');
    const posts = postsResponse.data;
    console.log('Posts data fetched successfully!');
    console.log(posts);

    // Fetch data from the second API (after first fetch completes)
    const usersResponse = await axios.get('https://jsonplaceholder.typicode.com/users');
    const users = usersResponse.data;
    console.log('Users data fetched successfully!');
    console.log(users);
  } catch (error) {
    console.error('Error fetching data:', error.message);
  }
}

fetchData();
