const Game = require('./game.js')
const readline = require('readline');
const reader = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
    
const completion = function () {
  reader.question('Do you wanna play again, bitch? y or n: ', (answer) => {
    if (answer === 'y') {
        const newGame = new Game();
        newGame.run(reader, completion);
    } else {
        reader.close();
        return;
    }

  });
  // yaddda yadda yadda
  
};
    
const gameNew = new Game();
gameNew.run(reader, completion);