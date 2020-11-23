// function one() {
//     return 1;
// }

// function two(num) {
//     return num * 2;
// }

// var answer = two( two( two( one() ) ) );
// console.log(answer);

const arr = [1,2,3,4];

function timesThree(arr) {
    const newArr = [];
    for(let element of arr) {
        newArr.push(element*3);
    }
    return newArr;
}

// console.log(timesThree(arr));

// .map

// console.log(arr.map(x => x*3));
// console.log(arr);

const movies = ["Up!", "Knives Out", "Harry Potter", "Harry Potter 2"];
// console.log(movies.map( (m, i) => `<li>${i+1}. ${m}</li>`) );

Array.prototype.myMap = function( callback ) {
    const arr = [];
    for(let i=0; i<this.length; i++) {
        arr.push( callback(this[i], i) );
    }
    return arr;
}

// console.log(movies.myMap( function(m, i) { 
//     return `<li>${i+1}. ${m}</li>` 
// }) );

// .filter

// console.log("longer than 3", movies.filter( m => m.length > 3));

Array.prototype.myFilter = function( callback ) {
    const arr = [];
    for(let i=0; i<this.length; i++) {
        if(callback(this[i])) {
            arr.push(this[i]);
        }
    }
    return arr;
}

// console.log("less than 4", movies.myFilter( m => m.length < 4));


// console.log( 
//     movies.filter( m => m[0] === "H")
//         .map( (m, i) => `<li>${i+1}. ${m}</li>`) 
// );

console.log(movies.map( (m, i) => {
    if(m.startsWith("H")) {
        return `<li> ${i+1} ${m}</li>`
    }
}).filter( m => m !== undefined));


const numbers = [3, 5, -2, 0, 10, -1];
// "dojo"
// console.log(numbers.map( x => x >= 0 ? x : "dojo"));