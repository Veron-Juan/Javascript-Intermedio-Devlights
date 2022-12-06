Array.prototype.myMap = function(callback) {
    const newArray = [];
    // Only change code below this line
    this.forEach((...arg) => newArray.push(callback(...arg)));
    // Only change code above this line
    return newArray;
  };