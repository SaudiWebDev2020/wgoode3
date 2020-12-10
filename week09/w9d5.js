String.prototype.hash = function() {
    let res = 0;
    for(let i=0; i<this.length; i++) {
        res += this.charCodeAt(i);
        res *= 7;
    }
    return res;
}

class HashMap {
    constructor(capacity=100) {
        this.capacity = capacity;
        this.map = new Array(capacity);
    }

    put(key, value) {
        let index = key.hash() % this.capacity;
        if(this.map[index]) {
            for(let i=0; i<this.map[index].length; i+=2) {
                if(this.map[index][i] === key) {
                    this.map[index][i+1] = value;
                    return;
                }
            }
            this.map[index].push(key);
            this.map[index].push(value);
        } else {
            this.map[index] = [key, value];
        }
    }

    get(key) {
        let index = key.hash() % this.capacity;
        if(!this.map[index]) {
            console.log("here");
            throw new Error(`Key Error - cannot locate ${key}`);
        } else {
            for(let i=0; i<this.map[index].length; i+=2) {
                if(this.map[index][i] === key) {
                    return this.map[index][i+1];
                }
            }
            throw new Error(`Key Error - cannot locate ${key}`);
        }
    }
}

const user1 = new HashMap();
user1.put("name", "Will");
user1.put("email", "wgoode@codingdojo.com");
user1.put("favDrink", "Monster");
user1.put("favNum", 8);
user1.put("currentGame", "BotW");
console.table(user1.map);
user1.put("name", "Denys");
user1.put("favDrink", "Sprite");
user1.put("currentGame", ["SC2", "Age of Empires"]);
console.table(user1.map);