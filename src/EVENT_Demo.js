import { EventEmitter } from 'events';  // Importing the EventEmitter class from the 'events' module

// Create a new instance of EventEmitter
const myEmitter = new EventEmitter();

// Define a handler function for the 'greet' event
function greetHandler(name) {
    console.log('Hello ' + name);  // Prints "Hello <name>" when the 'greet' event is emitted
}

// Define a handler function for the 'goodbye' event
function goodbyeHandler(name) {
    console.log('Goodbye ' + name);  // Prints "Goodbye <name>" when the 'goodbye' event is emitted
}

// Register event listeners with the 'on' method
myEmitter.on('greet', greetHandler);   // Listen for the 'greet' event and call greetHandler when it's emitted
myEmitter.on('goodbye', goodbyeHandler);  // Listen for the 'goodbye' event and call goodbyeHandler when it's emitted

// Emit events using the 'emit' method
myEmitter.emit('greet', 'John');  // Emit the 'greet' event, passing 'John' as the argument to the handler
myEmitter.emit('goodbye', 'John');  // Emit the 'goodbye' event, passing 'John' as the argument to the handler

// Error handling for events
// Register an error event listener
myEmitter.on('error', (err) => {
    console.log('An Error Occurred:', err);  // Logs an error message when the 'error' event is emitted
});

// Simulate an error by emitting the 'error' event
myEmitter.emit('error', new Error('Something went wrong'));  // Emit the 'error' event with an error object
