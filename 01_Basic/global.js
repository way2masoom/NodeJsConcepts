// __dirname : Returns the directory name of the current module
console.log(__dirname); // it will print the current directory path  // /Users/mdalam/Desktop/Developer/NodeJsConcepts

//module : The module object represents the current module, and it has properties for the module's id, filename, and exports.
console.log(module); // it will print the module object with its properties like id, filename, and exports

// filename: 
console.log(__filename); // it will print current file name   

// process :
console.log(process); // it will print the process object with its properties and methods
console.log(process.version); // it will print the current Node.js version
console.log(process.env); // it will print the environment variables 

console.log(require); // it will print the require function
console.log(global); // it will print the global object