// Creating a Promise
let myPromise = new Promise((resolve, reject) => {
    // Asynchronous Operation
    setTimeout(() => {
        let success = false;

        if (success) {
            resolve("Operation successfull")
        } else {
            reject("Operation failed")
        }
    }, 2000);
});

myPromise.then((message) => console.log(message))
    .catch((error) => console.log(error));