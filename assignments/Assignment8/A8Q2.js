const axios = require('axios');

async function fetchData() {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/invalid_url'); // Simulate error with invalid URL
    console.log(response.data);
  } catch (error) {
    console.error('Error fetching data:', error.message); // Log specific error message
  }
}

fetchData();
