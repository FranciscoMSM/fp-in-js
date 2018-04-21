function multBy2(a) {
  return a * 2;
}

function add2(a) {
  return a + 2;
}

console.log([1, 2, 3].map(multBy2)); // [2, 4, 6]
console.log([1, 2, 3].map(multBy2).map(add2)); // [4, 6, 8]

const multBy2Add2 = compose(multBy2, add2);

console.log([1, 2, 3].map(multiplyBy2Add2)); // [4, 6, 8]

const compose = (...fns) => x => fns.reduceRight((v, f) => f(v), x);
const pipe = (...fns) => x => fns.reduce((v, f) => f(v), x);
