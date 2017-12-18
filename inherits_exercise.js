
// Function.prototype.inherits = function (parentClass) {
//     const Surrogate = function () {}
//     Surrogate.prototype = parentClass.prototype;
//     this.prototype = new Surrogate();
//     this.prototype.constructor = this;
// };

// Function.prototype.inherits2 = function (parentClass) {
//     this.prototype = Object.create(parentClass.prototype);
//     this.prototype.constructor = this;
// }

var inherits = function (child, parent) {
    child.prototype = Object.create(parent.prototype);
    child.prototype.constructor = child;
};

function Animal (name) {
    this.name = name;
}

Animal.prototype.eat = function () {
    console.log(this.name + " eats!");
};

function Dog (name) {
    Animal.call(this, name);
}

inherits(Dog, Animal);

Dog.prototype.woof = function () {
    console.log(this.name + " goes woof!");
};



function Cat (name) {
    Animal.call(this, name);
}

inherits(Cat, Animal);

Cat.prototype.meow = function () {
    console.log(this.name + " goes meow!")
};


const dog1 = new Dog("Bane");
const cat1 = new Cat("Bitch");


dog1.woof();
dog1.eat();
cat1.meow();
cat1.eat();
