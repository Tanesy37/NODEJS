// argv - Command-line arguments
// process.argv is an array that contains the command-line arguments passed when running the Node.js application.
console.log(process.argv); // Prints the entire array of arguments passed to the process (including node executable and script name).
console.log(process.argv[3]); // Prints the 4th argument passed to the Node.js process (indexing starts from 0).

// process.env - Environment variables
// process.env is an object containing the environment variables for the current process.
console.log(process.env.LOGNAME); // Prints the value of the environment variable LOGNAME, which stores the current user's login name (on Unix-like systems).

// pid - Process ID
// process.pid provides the unique ID of the current Node.js process.
console.log(process.pid); // Prints the process ID of the current Node.js application.


// cwd() - Current working directory
// process.cwd() returns the current working directory of the Node.js process.
console.log(process.cwd()); // Prints the absolute path of the directory from which the Node.js application was launched.


// title - Process title
// process.title gets or sets the title of the current process.
console.log(process.title); // Prints the title of the Node.js process (usually 'node' unless manually changed).


// memoryUsage() - Memory usage of the current process
// process.memoryUsage() returns an object describing the memory usage of the Node.js process in bytes.
console.log(process.memoryUsage()); // Prints an object containing memory usage information like heap and external memory usage.


// uptime() - The time the process has been running
// process.uptime() returns the number of seconds the Node.js process has been running since it started.
console.log(process.uptime()); // Prints the number of seconds the current process has been running.


// exit - Exit event
// process.on('exit', ...) is used to register an event listener for the 'exit' event that is emitted when the Node.js process is about to exit.
process.on('exit', (code) => {
    console.log(`About to exit with code: ${code}`); // This will be printed before the process exits with the exit code.
});

// exit() - Terminate the process
// process.exit(code) immediately ends the process, where the optional code indicates the exit status.
process.exit(0); // Exits the process with code 0, indicating successful completion.

console.log('Hello from after exit'); // This line will not be printed because process.exit() was called above.
