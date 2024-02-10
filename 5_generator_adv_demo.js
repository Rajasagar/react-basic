function* fetchNextElement(){
    console.log("inside generator");
    const x=10;
    yield 11;
    console.log(yield 12);
    console.log("entering after a yeild");
    const y= x+(yield 30);
    console.log("value of y is", y);

}
console.log("start");
const iter = fetchNextElement();
console.log("called generator");
console.log("first", iter.next());
console.log("second", iter.next());
console.log("third", iter.next(10));
console.log("fourth", iter.next(12));
/*
start
called generator
inside generator
first { value: 11, done: false }
second { value: 12, done: false }
10  ( why 10 we function call back again to same position then it will go with 10)
entering after a yeild
third { value: 30, done: false }
value of y is 22 (why 22 is 12 we are passing and  x is 10 10+12 =22)
fourth { value: undefined, done: true }
*/