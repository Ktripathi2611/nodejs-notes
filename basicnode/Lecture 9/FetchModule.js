const axios = require('axios');

function fetching() {
    axios.get("https://jsonplaceholder.typicode.com/posts")
        .then((response) => response.json())
        .then((data) => console.log(data[0].title))
        .catch((error) => console.log(error));
}

module.exports = {
    fetching
}