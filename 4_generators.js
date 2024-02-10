/*
Generator functions provide a powerful alternative: 
they allow you to define an iterative algorithm by writing a single function whose execution is not continuous. 
Generator functions are written using the function* syntax.

When called, generator functions do not initially execute their code. 
Instead, they return a special type of iterator, called a Generator. 
When a value is consumed by calling the generator's next method, 
the Generator function executes until it encounters the yield keyword.

the function can be called as many times as desired, and returns a new Generator each time. 
Each Generator may only be iterated once.

yield is similar to a return but not a return.
*/

function* fetchNextElement() {
    console.log("i am inside the generator function");
    yield 1;
    yield 2;
    console.log("somewhere in the middle")
    yield 3;
    yield 4;
}

const iter= fetchNextElement();

console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
/*
i am inside the generator function
{ value: 1, done: false }
{ value: 2, done: false }
somewhere in the middle
{ value: 3, done: false }
{ value: 4, done: false }
{ value: undefined, done: true }
*/
