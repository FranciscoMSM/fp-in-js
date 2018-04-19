// for loop

const data = [1, 2];

function multArrBy2(array) {
  const newArr = [];

  for (let i = 0; i < array.length; i++) {
    newArr.push(array[i] * 2);
  }

  return newArr;
}

console.log(multArrBy2(data)) // [2, 4] 


// map
function multiply(a) {
    return function(b) {
        return a * b;
    }
}
const multiplyBy2 = multiply(2);

console.log(data.map(multiplyBy2)); // [2, 4]
