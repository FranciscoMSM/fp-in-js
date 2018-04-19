// impure function

let state = 10;

function isValid() {
  if (state == 10)
    return 'valid';
  else
    return 'invalid';
}

isValid() // 'valid'

function mutateState() {
  state = state + 1;
}

mutateState(); 

isValid() // 'invalid'


// pure function

function isValid(state) {
  if (state == 10)
    return 'valid';
  else
    return 'invalid';
}

isValid(10) // 'valid'

isValid(11) // 'invalid'


