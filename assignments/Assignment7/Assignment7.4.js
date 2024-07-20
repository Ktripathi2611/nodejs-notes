function task1() {
    return new Promise((resolve, reject) => {
      console.log('Task 1 started');
      setTimeout(() => {
        console.log('Task 1 completed');
        resolve('Task 1 result'); // Resolve with a value
      }, 1000);
    });
  }
  
  function task2(data) {
    return new Promise((resolve, reject) => {
      console.log('Task 2 started with data:', data);
      setTimeout(() => {
        console.log('Task 2 completed');
        resolve('Task 2 result'); // Resolve with a value
      }, 2000);
    });
  }
  
  function task3(data) {
    return new Promise((resolve, reject) => {
      console.log('Task 3 started with data:', data);
      setTimeout(() => {
        console.log('Task 3 completed');
        resolve('Task 3 result'); // Resolve with a value
      }, 3000);
    });
  }
  
  // Promise chaining
  task1()
    .then((data) => {
      console.log('Task 1 completed with data:', data);
      return task2(data); // Pass data to next task
    })
    .then((data) => {
      console.log('Task 2 completed with data:', data);
      return task3(data); // Pass data to next task
    })
    .then((data) => {
      console.log('Task 3 completed with data:', data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });

    