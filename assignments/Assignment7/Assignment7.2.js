function doTask(callback) {
    console.log('Task started');
    setTimeout(() => {
      console.log('Task completed');
      if (callback) {
        callback();
      }
    }, 2000); // Simulate 2 second delay
  }
  
  // Callback function
  const callbackFunction = () => {
    console.log('Callback executed');
  };
  
  // Call doTask with callback
  doTask(callbackFunction);
  