/* 
 * TOP 3.5 WAYS TO MAKE AN OBJECT IN JS
 */

const s1 = {};
s1.bread = "wheat";
s1.protein = "roast beef";
s1.cheese = "swiss cheese";
s1.calories = 400;
s1.toppings = ["mustard", "arugula", "tomatoes"];
s1.isToasted = false;
s1.showInfo = function() {
    console.log(`Showing Sandwich:
bread:    ${this.bread}
protein:  ${this.protein}
cheese:   ${this.cheese}
calories: ${this.calories} cal
toppings: ${this.toppings}
toasted?: ${this.isToasted ? "Yes": "No"}`);
}

s1.showInfo();

function toaster(s) {
    if(typeof(s) === "object") {
        s.isToasted = true;
    }
}

toaster(s1);
s1.showInfo();


function Sandwich1(bread, protein, cheese, calories, isToasted, ...toppings) {
    this.bread = bread;
    this.protein = protein;
    this.cheese = cheese;
    this.calories = calories;
    this.isToasted = isToasted;
    this.toppings = toppings;
}

Sandwich1.prototype.showInfo = function() {
    console.log(`Showing Sandwich:
bread:    ${this.bread}
protein:  ${this.protein}
cheese:   ${this.cheese}
calories: ${this.calories} cal
toppings: ${this.toppings}
toasted?: ${this.isToasted ? "Yes": "No"}`);
}

const s2 = new Sandwich1("white", "turkey", "provolone", 500, true, "mayo", "mustard", "avacado");
s2.showInfo();
console.log(typeof(s2));

// 99% of the time this is how we want to make an object in JS
class Sandwich {
    constructor(bread, protein, cheese, calories, isToasted, ...toppings) {
        this.bread = bread;
        this.protein = protein;
        this.cheese = cheese;
        this.calories = calories;
        this.isToasted = isToasted;
        this.toppings = toppings;
    }

    showInfo() {
        console.log(`Showing Sandwich:
bread:    ${this.bread}
protein:  ${this.protein}
cheese:   ${this.cheese}
calories: ${this.calories} cal
toppings: ${this.toppings}
toasted?: ${this.isToasted ? "Yes": "No"}`);
    }
}

const s3 = new Sandwich("pumpernickel", "turkey", "provolone", 500, true, "mayo", "mustard", "avacado");
s3.showInfo();
console.log(s3);

class Panini extends Sandwich {
    constructor(bread, protein, cheese, calories, ...toppings) {
        super(bread, protein, cheese, calories, true, toppings);
    }
}

const s4 = new Panini("ciabatta", "london broil", "gouda", 600, "pesto aoili", "avacado");
s4.showInfo();
console.log(s4);