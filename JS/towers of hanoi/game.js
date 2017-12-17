class Game {
  
    constructor () {
      this.towers = [[3, 2, 1], [], []];
      
    }
    
    print () {
      const towersString = (this.towers);
      console.log(JSON.stringify(towersString));
    }
    
    
  // h
    promptMove (reader, callback) {
      reader.question('Where do you want to get disc from? :', (startTowerIdx) => {
        const startDiscIndex = parseInt(startTowerIdx);
      reader.question('Where do you want to place the disc? :', (endTowerIdx) => {
        const endDiscIndex = parseInt(endTowerIdx);
        callback(startDiscIndex, endDiscIndex)
        });
      });
    }
    
    
    
    isValidMove (startTowerIdx, endTowerIdx) {
      if (this.towers[startTowerIdx].length === 0) {
        return false;
      } else if (this.towers[endTowerIdx].length === 0) {
        return true;
      } else {
        return this.towers[startTowerIdx][this.towers[startTowerIdx].length - 1] < this.towers[endTowerIdx][this.towers[endTowerIdx].length - 1];
      }
    }
    
    
    
    move (startTowerIdx, endTowerIdx) {
      if (this.isValidMove(startTowerIdx, endTowerIdx)) {
        this.towers[endTowerIdx].push(this.towers[startTowerIdx].pop());
        return true;
      } else {
        return false;
      }
    }
    
    
    isWon () {
      if (this.towers[1].length === 3) {
        console.log("Game is won!");
        return true;
      } else if (this.towers[2].length === 3) {
        console.log("Game is won!");
        return true;
      } else {
        console.log("Game is not done yet");
        return false;
      }
    }
    
    
    
  // h
    run (reader, callbackfunct) {
      this.print();
      this.promptMove(reader, (startTowerIdx, endTowerIdx) => {
        if (this.move(startTowerIdx, endTowerIdx)) {
          console.log("Valid move!");
          } else {
            
          console.log("Invalid move!");
          }
      
       if (!this.isWon()) {
          this.run(reader, callbackfunct);
        } else {
          this.print();
          console.log("YOU ARE DONE.");
          callbackfunct();
        }
        
      });
    }
    
    
    
    
    
  // closing bracket of class
  }
  
module.exports = Game;
  