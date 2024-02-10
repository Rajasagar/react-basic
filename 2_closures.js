function process() {
  let i = 0;
  let j = [1, 2, 3];
  let k = 10;
  function innerprocess() {
    i += 1;
    console.log(j);
    return i;
  }
  return innerprocess; // we are not calling the function, we are just returing.
}
x = process();
console.log(x());
/*
[ 1, 2, 3 ] j value
1 i value
 
*/
