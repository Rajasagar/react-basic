function* fetchNextElement() {
  const x = 10;
  yield 11;
  console.log("entering after a yeild");
  const y = x + (yield 20);
  console.log("value of y is", y);
}
const iter = fetchNextElement();
console.log("first", iter.next());
console.log("Second", iter.next());
console.log("third", iter.next(12));
/*
first { value: 11, done: false }
entering after a yeild
Second { value: 20, done: false }
value of y is 22
third { value: undefined, done: true }
*/
/* full explaniation 
1.when we called function and its see a generator function its return back and  create iterator objects

2. when it called iter.next() it goes inside fetchNextElement so x=10 and yield 11; it momentally comes 
back and print first value 11 and fetchNextElement removes from callback, and it will remember x=10 due to clousre property

3.next line when it called iter.next() it goes inside fetchNextElement and we leave at  yield 11;
so it will start from there and print entering after a yeild and next line it see y = x+ yield 20
when it see yeild 20 it comes to and print second value 20 and fetchNextElement removes from callback,

4.next line when it called iter.next(12) it goes inside fetchNextElement and we leave at  yield 30
so it will start y=x+ the value we are passing as argument in next().
so we are doing  y=10+12 i.e., 22 and value of y is 22 will print and it ends 
after that it will print third { value: undefined, done: true }. and fetchNextElement removes from callback




*/
