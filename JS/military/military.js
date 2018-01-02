class Military {

    constructor () {

        this.army = 0;
        this.navy = 0;
        this.marines = 0;
        this.airForce = 0;
        this.coastGuard = 0;

        console.log("hey");
    }

    run (reader) {

        
        reader.question("How many army do you wanna add?", (answer) => {
            this.army += parseInt(answer);
            console.log(`You have ${this.army} army people.`);
            reader.question("How many navy people do you wanna add?", (answer) => {
                this.navy += parseInt(answer);
                console.log(`You have ${this.navy} navy people.`);
                reader.close();
            })
        })


       

    }



    
}


module.exports = Military;