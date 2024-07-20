const axios = require('axios');

async function fetchData() {
  try {
    // Prepare promises for each API call
    const postsPromise = axios.get('https://jsonplaceholder.typicode.com/posts');
    const usersPromise = axios.get('https://jsonplaceholder.typicode.com/users');

    // Fetch data in parallel using Promise.all
    const [postsResponse, usersResponse] = await Promise.all([postsPromise, usersPromise]);

    const posts = postsResponse.data;
    const users = usersResponse.data;

    console.log('Posts data fetched successfully!');
    console.log(posts);

    console.log('Users data fetched successfully!');
    console.log(users);
  } catch (error) {
    console.error('Error fetching data:', error.message);
  }
}

fetchData();

