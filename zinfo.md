# Information

Information about this file.



-------------------------------------------------------------------------
# Using Babel to be able to write ES6 Syntax in Node.js

Node.js do not accep the importing ES6 Syntax " import express from 'express' "  In order to accept this syntax we nee to install BABEL in the project. 

The following set-u will make it work like usin "nodemon".

Location: http://babeljs.io/

### Steps to set-up Babel: 
- Install babel: $ npm install --save-dev babel-cli babel-preset-env  
- Install Babel-Watch: $ npm install --save babel-watch
- Then create the " .babelrc " file in the root directory 
- Add script in package.json file  **see-1



**see-1:
package.json in the:

"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "babel-watch server.js"  <--- Add this line.
  }

-------------------------------------------------------------------------
