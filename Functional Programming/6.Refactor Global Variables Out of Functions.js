// The global variable
const bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];



// Change code below this line
function add(array, bookName) {
  const newArray = [...array]
  newArray.push(bookName);
  return newArray;
  
  // Change code above this line
}

// Change code below this line
function remove(array, bookName) {
  const newArray = [...array]
  
  if (newArray.indexOf(bookName) >= 0) {
    
    newArray.splice(newArray.indexOf(bookName), 1); 
    return newArray;

    // Change code above this line
    }
}

