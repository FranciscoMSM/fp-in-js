function greeting(msg, name) {
  console.log(msg + ' ' + name);
}
// greeting('Hello', 'GDG')

function greetingCur(msg) {
  return function(name) {
    console.log(msg + ' ' + name);
  }
}
// greetingCur('Hello')('GDG')


const sayHelloTo = greetingCur('Hello');
sayHelloTo('GDG')
