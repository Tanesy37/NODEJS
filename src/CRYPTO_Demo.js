import url from 'url';  // Import the 'url' module, which contains utilities for URL handling.

const urlString = 'https://www.google.com/search?q=hello+world';  // A sample URL string.


// Create a URL object from the URL string
const urlObj = new URL(urlString);  // The URL object parses the string into its components.

console.log(urlObj);  // Logs the URL object, which contains all the individual components of the URL:
// {
//   href: 'https://www.google.com/search?q=hello+world',
//   origin: 'https://www.google.com',
//   protocol: 'https:',
//   host: 'www.google.com',
//   hostname: 'www.google.com',
//   pathname: '/search',
//   search: '?q=hello+world',
//   searchParams: URLSearchParams { 'q' => 'hello+world' },
//   hash: ''
// }


// Convert the URL object back to a string using `url.format()`
console.log(url.format(urlObj));  // The output will be the same string as `urlString`: 'https://www.google.com/search?q=hello+world'


// `import.meta.url` provides the URL of the current module (in an ESM context).
console.log(import.meta.url);  // Logs the URL of the current module, for example: 'file:///path/to/your/script.js'


// Convert a file URL to a local file path using `url.fileURLToPath()`
console.log(url.fileURLToPath(import.meta.url));  // Converts the `import.meta.url` file URL to a file system path, e.g., '/path/to/your/script.js'.


console.log(urlObj.search);  // Logs the search part of the URL (the query string): '?q=hello+world'


// Create a URLSearchParams object from the search query string
const params = new URLSearchParams(urlObj.search);  // This object allows us to work with the query parameters.

console.log(params.get('q'));  // Retrieves the value of the 'q' parameter, which is 'hello world'.


params.append('limit', '5');  // Adds a new parameter 'limit' with the value '5' to the query string.
params.delete('limit');  // Removes the 'limit' parameter from the query string.

console.log(params);  // Logs the updated URLSearchParams object. After deleting 'limit', it will still show:
// URLSearchParams { 'q' => 'hello+world' }
