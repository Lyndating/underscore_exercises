
// # Collections!

// Log out the answers to all of the following questions!

// Here is some data that you can work with. 

// ```js
const numbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];

const people = [
  { id: 1, username: "A", active: true,  age: 20 },
  { id: 2, username: "B", active: false, age: 35 },
  { id: 3, username: "C", active: false, age: 50 },
  { id: 4, username: "D", active: true,  age: 65 },
  { id: 5, username: "E", active: true,  age: 80 },
  { id: 6, username: "E", active: true,  age: 95 },
];
// ```
// ## Exercises

// - Iterate through ` numbers ` and log each number to the console
const a = _(numbers).each(function(n){console.log(n)});

// - Iterate through ` numbers ` and multiply each one of them by 5
const multiplyByFive = _(numbers).map(function(n){
    return n * 5;
});

const fives=[]; //define the array
_(numbers).each(function(n){
   return fives.push(n*5); // array manipuation
});
// - Iterate through ` numbers ` and reduce it by adding them together
// let sum = 0;
// _(numbers).each(function(n) {
//     sum += n;
//     console.log("n",n,"sum", sum);
// });
const sum = _(numbers).reduce(function(accumulator, nextNum) {
    console.log("runningTotal", accumulator, "n", n , 'returning', accumulators+nextNum);
    return accumulator +  nextNum;
});

const add = function(a,b){
    return a + b;
}
_(numbers).reduceRight(add);

// - Get an array of all of the people in ` people ` that have the username "E"
const eUsers = _(people).where({username: "E"}); //return an array.
console.log(eUsers);
_filter(people),function(p){return p.username === "E"}

// - Find the first object in ` people ` that has the id of 3
const user3 = _(people).findWhere({id: 3});
// - Find the first person who has an age of less than 50
// using function to pass a query
const youngster = function (person) {
    return person.age < 50;
}
const youngPerson = _(people).find(youngster);
// find is only return the first element
// findWhere will return all the elements matching condition


// - Get an array of all of the people with an age of over 60
const seniors = _(people).select(function(person){
    return person.age > 60;
});
// - Remove all of the people with an age less than 40
// reject is the opposite of select
const adults = _(people).reject(function(p){
    return p.age > 40;
})
// return values 

// ## Remember!

// You have the [documentation!](https://underscorejs.org/)    

_.random(50);
numbers[Math.floor(Math.random()* numbers.length)];
_(numbers).sample(5);
_.range(4,8); // give you an array of range from 4 to 8.
numbers.sort(function(){
    return 0.5 - Math.random();
});
_(numbers).shuffle();