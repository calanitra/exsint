// Set a timeout to execute a function after 2 seconds
var timeout = setTimeout(function() {
  console.log('This will not run if clearTimeout is called before 2 seconds.');
}, 2000);

// Clear the timeout, if needed
clearTimeout(timeout);
