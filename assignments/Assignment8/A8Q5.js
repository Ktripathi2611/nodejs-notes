const axios = require('axios');

async function fetchPosts() {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    return response.data;
  } catch (error) {
    console.error('Error fetching posts:', error.message);
    return []; // Return empty array in case of error
  }
}

async function fetchComments() {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/comments');
    return response.data;
  } catch (error) {
    console.error('Error fetching comments:', error.message);
    return []; // Return empty array in case of error
  }
}

async function fetchData() {
  try {
    const posts = await fetchPosts();
    console.log('Posts fetched successfully!');
    console.log(posts);

    const comments = await fetchComments();
    console.log('Comments fetched successfully!');
    console.log(comments);
  } catch (error) {
    console.error('Error fetching data:', error.message);
  }
}

fetchData();
