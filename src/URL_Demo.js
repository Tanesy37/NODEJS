import url from 'url';  // Importing the 'url' module from Node.js

const urlString = 'https://www.google.com/search?q=hello+world';  // A URL string to work with

// URL Object
const urlObj = new URL(urlString);  // Creates a URL object from the string

console.log(urlObj);  // Logs the URL object, which includes parsed details of the URL

// format()
console.log(url.format(urlObj));  // Converts the URL object back to a string representation of the URL

// import.meta.url - file URL
console.log(import.meta.url);  // Logs the current module's URL (in this case, the file's URL)


// fileURLToPath()
console.log(url.fileURLToPath(import.meta.url));  // Converts the file URL of the current module into a file path (e.g., '/path/to/your/file.js')

// Search Parameters from the URL
console.log(urlObj.search);  // Logs the query string from the URL (e.g., '?q=hello+world')

// URLSearchParams
const params = new URLSearchParams(urlObj.search);  // Creates a URLSearchParams object from the query string

console.log(params.get('q'));  // Retrieves the value of the 'q' parameter (prints 'hello world')

// Modify Search Parameters
params.append('limit', '5');  // Adds a new parameter 'limit' with value '5'
params.delete('limit');  // Deletes the 'limit' parameter

console.log(params);  // Logs the URLSearchParams object after modifying (should show 'q=hello+world')
