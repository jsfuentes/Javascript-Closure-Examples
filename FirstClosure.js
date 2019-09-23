//our first closure
function addMaker(x) {
  function add(y) {
    console.log(x + y);
  }
  x = 10;
  return add;
}

const add3 = addMaker(3);
add3(4);
const add4 = addMaker(4);
add4(4);
