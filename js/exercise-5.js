// # Utilities, Functions and Chaining!

// Log out the answers to all of the following questions!

// Here is some data that you can work with. 

// ```js
var people = [
  { id: 1, username: "A", active: true,  age: 20, uid: 1412 },
  { id: 2, username: "B", active: false, age: 35, uid: 1352 },
  { id: 3, username: "C", active: false, age: 50, uid: 5418 },
  { id: 4, username: "D", active: true,  age: 65, uid: 216  },
  { id: 5, username: "E", active: true,  age: 80, uid: 18   },
  { id: 6, username: "E", active: true,  age: 95, uid: 1000 }
];

// ```

// - Log out 30 random numbers between 20 and 100
console.log(_.sample(_.range(20,100), 30));
// - Create a function that can only ever be called once
const initialize = function(){
    _.once(console.log("Hello World"))
};
// - Append a paragraph tag to the body for every person in ` people `. It should end up looking something like this - ` <p> Hello A, you don't look a day over 20 </p> `
_.each(people, function(person){
    const para = document.createElement("p");
    para.innerText =  `Hello ${person.username}, you don't look a day over ${person.age}`;
    document.body.appendChild(para);
}) ; 

// ## The Final Exercise

// This is really, really difficult, and we don't really expect it to get done. But worth having a think about!

// Eventually we want five console.logs that look like the following...

var startingData = [
    [["groucho", "marx", 1990], ["firstName", "lastName", "born"]],
    [["chico",   "marx", 1987], ["firstName", "lastName", "born"]],
    [["zeppo",   "marx", 2001], ["firstName", "lastName", "born"]],
    [["harpo",   "marx", 1988], ["firstName", "lastName", "born"]],
    [["gummo",   "marx", 1992], ["firstName", "lastName", "born"]]
  ];
// ```
// Groucho Marx was born in 1890.
// Chico Marx was born in 1887.
// Zeppo Marx was born in 1901.
// Harpo Marx was born in 1888.
// Gummo Marx was born in 1892.
// ```
// You'll need to rearrange the data firstly, then alter the data, then print it out. 
// ### A few hints
// Have a think before you read these!
// - The following functions could be helpful
//   ```js
//   _.chain();
//   _.map();
//   _.unzip();
//   _.object();
//   _.invert();
//   _.mapObject();
//   _.isNaN();
//   _.template();
//   ```

// **The steps you could take...**

// - First step is restructuring each one of the nested arrays (_.unzip will help). For example:
//   ```js
//   // This...
//   [["groucho", "marx", 1990], ["firstName", "lastName", "born"]]
const firstStep =_.map(startingData,function(arr){return _.unzip(arr)});
console.log(firstStep);
//   // Needs to become this...
//   [["groucho", "firstName"], ["marx", "lastName"], [1990, "born"]]
//   ```
// - You then need to turn them into an object (_.object will help). For example:
//   ```js
//   // This...
//   [["groucho", "firstName"], ["marx", "lastName"], [1990, "born"]]
const secondStep = _.map(firstStep, function(arr){return _.object(arr)});
console.log(secondStep);
//   // Needs to become this...
//   { 1990: "born", groucho: "firstName", marx: "lastName" }
//   ```
// - You then need to flip that object around (_.invert will help). For example:
//   ```js
//   // This...
//   { 1990: "born", groucho: "firstName", marx: "lastName" }
const thirdStep = _.map(secondStep, function(arr) {return _.invert(arr)});
console.log(thirdStep);
//   // Needs to become this...
//   { born: "1990", firstName: "groucho", lastName: "marx" }
//   ```
// - You then need to change each value in that object.  If the value can be turned into a number, you need to minus 100 from it. If it can't be, you need to make the first letter a capital (_.mapObject, _.isNaN will help) For example:
//   ```js
//   // This...
//   { born: "1990", firstName: "groucho", lastName: "marx" }
const fourStep = _.map(thirdStep, function(obj) {
    return _.mapObject(obj, function(val, key) {
        console.log(val);
        if (!_.isNaN(Number(val))){
            console.log(val-100);
            return val-100;
        }else{
        return val[0].toUpperCase() + val.substring(1)
        }
    })
});

console.log(fourStep);

//   // Needs to become this...
//   { born: 1890, firstName: "Groucho", lastName: "Marx" }
//   ```
// - After that, for each object in the ` startingData `, you need to create a template (_.template will help) that receives an object, and console.log a string that looks something like this:
//   ```js
//   // This...
//   { born: 1890, firstName: "Groucho", lastName: "Marx" }
const list = document.createElement('ul');
const para = document.createElement("li");
document.body.appendChild(list);
const result = document.getElementById('result');
let template = _.template("<%= firstName%> <%=lastName%> was born in <%=born%>. ");
_.each(fourStep, function(obj) {
    const para = document.createElement("li");
    document.body.appendChild(para);
    para.append(template({firstName :obj.firstName, lastName : obj.lastName, born: obj.born}));
});

//   // Needs to be used to create a string that looks like this...
//   "Groucho Marx was born in 1890."
//   ```

// [Here is a potential solution.](https://gist.github.com/ga-wolf/97aa407165223be0fcd7)

// ## Remember!

// You have the [documentation!](https://underscorejs.org/)