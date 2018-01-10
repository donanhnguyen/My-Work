class View {

    constructor (game, $mainEl) {
        this.game = game;
        this.$mainEl = $mainEl;

        this.startTowerIdx = null;

        this.$mainEl.on("click", "ul", this.clickHandler.bind(this));


        this.setupTowers();
        this.render();
    }


    getFuckingIndex (element) {
      const fuckingIndex = Array.prototype.indexOf.call(element.parentNode.children, element);
      return fuckingIndex;
    }

    clickHandler (event) {
       
        //jquery way
        // const targetDiscIdx = $(event.currentTarget).index();

        //vanilla DOM way
        const targetDiscIdx = this.getFuckingIndex(event.currentTarget);
    
        if (this.startTowerIdx === null) {
          this.startTowerIdx = targetDiscIdx;
          this.$mainEl.find("ul").eq(this.startTowerIdx).toggleClass("selected-tower");
        } else {
          if (!this.game.move(this.startTowerIdx, targetDiscIdx)) {
            alert("Wrong move, bitch.");
          } 

          this.$mainEl.find("ul").eq(this.startTowerIdx).removeClass("selected-tower");
          this.startTowerIdx = null;
          
        }
        

        this.render();



        if (this.game.isWon()) {
          this.$mainEl.off("click");
          alert("Game over, bitch.");
        }
            
    }


    setupTowers () {
        
       

        let $tower = null;
        let $disk = null;
      

        for (let i = 0; i < 3; i++) {
         
            $tower = $("<ul>");

            for (let j = 0; j < 3; j++) {
             
              $disk = $("<li>");
              $tower.append($disk);

            }
            
            $tower.addClass("tower");
            this.$mainEl.append($tower);

        };

    


    }


    render () {


        const $towers = this.$mainEl.find("ul");

       

        this.game.towers.forEach( (tower, towerIdx) => {

          const $disks = $towers.eq(towerIdx).children();
          $disks.removeClass();
         $disks.empty();
          tower.forEach( (disc, discIdx) => {
            $disks.eq(-1 * (discIdx + 1)).addClass(`disc-${disc - 1}`);
            $disks.eq(-1 * (discIdx + 1)).text(`DISC ${disc - 1}`);
           
          })


        })
       
     

    }




}





module.exports = View;