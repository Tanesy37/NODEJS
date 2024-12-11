import path from 'path';    // Import the 'path' module, which provides utilities for working with file and directory paths
import url from 'url';      // Import the 'url' module, which provides utilities for working with URLs

const filePath = './dir1/dir2/test.txt';   // Example file path

// basename() - Get the last part of the path (filename)
// path.basename() returns the last portion of the given path (the file name).
console.log(path.basename(filePath)); // Output: 'test.txt'

// dirname() - Get the directory name
// path.dirname() returns the directory portion of the given path, excluding the filename.
console.log(path.dirname(filePath)); // Output: './dir1/dir2'

// extname() - Get the file extension
// path.extname() returns the file extension (including the dot).
console.log(path.extname(filePath)); // Output: '.txt'

// parse() - Parse a path into an object
// path.parse() returns an object with properties representing different parts of the path (root, dir, base, ext, and name).
console.log(path.parse(filePath));
// Output: 
// {
//     root: '',
//     dir: './dir1/dir2',
//     base: 'test.txt',
//     ext: '.txt',
//     name: 'test'
// }

// __filename - Current filename
// url.fileURLToPath(import.meta.url) converts the ES module URL to the file path of the current module
const __filename = url.fileURLToPath(import.meta.url);

// __dirname - Current directory name
// path.dirname(__filename) returns the directory name of the current file (the directory the script is executed from)
const __dirname = path.dirname(__filename);

// join() - Join multiple segments into a single path
// path.join() combines multiple path segments into a single normalized path. It automatically adds necessary separators based on the OS.
const filePath2 = path.join(__dirname, 'dir1', 'dir2', 'test.txt');
console.log(filePath2); // Output: The full path to 'test.txt' in the 'dir1/dir2' directory

// resolve() - Resolve an absolute path from a relative path
// path.resolve() resolves a sequence of paths into an absolute path, using the current working directory if necessary.
const filePath3 = path.resolve(__dirname, 'dir1', 'dir2', 'test.txt');
console.log(filePath3); // Output: The absolute path to 'test.txt' based on the current directory (__dirname)
