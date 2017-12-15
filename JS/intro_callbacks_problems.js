class Clock {
    constructor() {
      
      // 1. Create a Date object.
      
      const currentTime = new Date();
      // 2. Store the hours, minutes, and seconds.
      this.hours = currentTime.getHours();
      this.minutes = currentTime.getMinutes();
      this.seconds = currentTime.getSeconds();
      // 3. Call printTime.
      this.printTime();
      // 4. Schedule the tick at 1 second intervals.  
      setInterval(
        
        this._tick.bind(this)
        
     
      , 1000);
      
    }
  
    printTime() {
      const printedTime = `${this.hours}:${this.minutes}:${this.seconds}`;
      console.log(printedTime);
      // Format the time in HH:MM:SS
      // Use console.log to print it.
    }
  
    _tick() {
      
      this._incrementSeconds();
      // 1. Increment the time by one second.
      // 2. Call printTime.
      this.printTime();
    }
    
    _incrementSeconds() {
      // 1. Increment the time by one second.
      this.seconds += 1;
      if (this.seconds === 60) {
        this.seconds = 0;
        this._incrementMinutes();
      }
    }
  
    _incrementMinutes() {
      this.minutes += 1;
      if (this.minutes === 60) {
        this.minutes = 0;
        this._incrmentHours();
      }
    }
  
    _incrementHours() {
      this.hours = (this.hours + 1) % 24;
    }
  
  
  }
  
  // test
  const clock = new Clock();
  
  
  
  
  
  
  
  
  
  
  const readline = require('readline');
  
  const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
    
  })
  
  function addNumbers (sum, numsLeft,
      completionCallback) {
    
    if (numsLeft > 0) {
      reader.question('Enter another number: ', function (numGiven) {
        const numString = parseInt(numGiven);
        sum += numString;
        console.log(`Partial Sum is: ${sum}`);
        
        addNumbers(sum, numsLeft - 1, completionCallback);
        
      })
      
    } else {completionCallback(sum); return;}
    
    
  }
  // test
  addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));
  
  
  
  
  
  
  
  
  
  const readline = require('readline');
  
  const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
    
  });
  
  
  
  // Write this first.
  function askIfGreaterThan(el1, el2, callback) {
    // Prompt user to tell us whether el1 > el2; pass true back to the
    // callback if true; else false.
    reader.question(`Is ${el1} greater than ${el2}? Yes or no? `, function (answer) {
      
      if (answer === "yes") {
        callback(true);
        
      } else {
        callback(false);
        
      }
      
      
    })
    
  }
  
  // test
  askIfGreaterThan(10, 20, function (argument) {
    
    if (argument === true) {
      console.log("yay");
      
    } else {
      console.log("noooooo");
    }
    
  });
  
  
  
  
  
  
  
  Function.prototype.myBind = function (context) {
    
    return () => this.apply(context);
    
  }
  
  class Lamp {
    constructor() {
      this.name = "a fucking lamp";
    }
  }
  
  const turnOn = function() {
    console.log("Turning on " + this.name);
  }
  
  const lamp = new Lamp();
  
  
  const myBoundTurnOn = turnOn.myBind(lamp);
  
  // test
  console.log(myBoundTurnOn()); // should say "Turning on a lamp"
  