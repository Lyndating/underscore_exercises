// # Objects!

// Log out the answers to all of the following questions!

// Here is some data that you can work with. 

// ```js
var objectToMap = {
  start:  100,
  middle: 853,
  end:    912
}
// ```

// - Multiply each value in ` objectToMap ` by a random number and return an object with the changed values
_.mapObject(objectToMap, function(val,key) {
    return val + _.random(1,100);
});
// - Get an array version of ` objectToMap ` that looks like this - ` [["start", 100], ["middle", 853], ["end", 912]] `
_.pairs(objectToMap);
// - Flip ` objectToMap ` around so that it looks like this - ` { "100" : "start", "853" : "middle", "912" : "end" } `
_.invert(objectToMap);
// - Remove the "start" key from ` objectToMap ` in two different ways
_.omit(objectToMap, "start");
_.pick(objectToMap, "middle", "end");
// ## Remember!

// You have the [documentation!](https://underscorejs.org/)