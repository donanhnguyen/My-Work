const Military = require('./military.js')
const readline = require('readline');
const reader = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });



const game1 = new Military();
game1.run(reader);
