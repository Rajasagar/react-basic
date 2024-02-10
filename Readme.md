- abstract opeartions -> 
- Coercion - type conversion 
    whenever we do an operartion, based on the input we can acutally convert  the input for operation.
    explicit type casting- this converation can  be manually done by us or the language based on some certain rules.
    implict typecasting - automatically converts the types. also known as coercion.

-  undefined return NaN 
- Null return +0
- boolean if arguemnt is true return 1. if argumet is false return +0
- number return argument (no conversion)
- string see grammer and conversion algo.
- symbol throw a Type exception.
 eg 10-null --> 10-0=10
    10-undefined = 10-NaN = NaN
    10-true =10-1 =9
    1-"654" = -653
    1-"12we34" = 1- NaN= NaN
    1-"0xa" = 1- 10= -9 (0xa)hexadecimal value

- ToString and valueOf 
    let obj ={};
    console.log(obj.toString()); // [object object]
    every object have toString function already define in it.
    we can over write toString function defaults it give u [object object]
    let obj ={};
    toString(){
        return "lets run the js"
    }
    console.log(obj.toString()); //lets run the js
    valueOf() // bydefault it return the same object
    let obj={x:10 , valueOf() { return 10}};
    console.log(obj.valueOf());//10

    default implemntation of toString in an object return a string [object object]
    default implemntation of valueOf  in an object return a same objects, but you can overwrite them.

    let obj={x:10};
    console.log(typeof obj.valueOf()); // object

 ToPrimitive with ToNumber.
 let obj={}
 console.log(10-obj); // NaN  obj.valueOf -> object, toString -> [object object]

 let obj1 = {x:9, y:8};
 console.log(100-obj1); // NaN

 let obj2 ={x:7, valueOf() {return 99}};
 console.log(100-obj2); // 1

 let obj3 = {x:8, toString() {return "88"}};
 console.log(90- obj3)// 2

 let obj4 ={ x: 7, toString() {return{}}};
 console.log(100- obj4)// type error cannot convert object to primitive value

 Coercion in addition operator.
  if any one of the either left or right primitive is string u convert both of them to string. and do the string conctenation

NOTE: The addition operator either performs string concatenation or numeric addition.

The unary + operator converts its operand to Number type. eg +"10" to change the code to positive number.

Equality Opeators.
    both the below alog check the type first.
    1.Abstract Equality Comparison (==)
        it check the type first type(x) is the same as type(x)
        if x is null and y is undefined return true. and vice versa is also true.
        if any of the operands is number and other is string then string will change to number and do compare
        if any of the operands is boolean then it will change the boolean to number and do compare.
    console.log(false=="0") // true
/*
x= false --> boolean and y=0
x--> boolean--> toNumber-->false-->0
y-> toNumber->0
0==0 -> true
*/
    if any of the operands is either string, number, symbol consider (x) and other (y) is objects.then comparion x==ToPrimitive(y) and vice versa.

console.log(null== false)// false y--> boolean --> tonumber->0 null==0 false
let obj={x:10, valueOf() {return 100}};
console.log(99==obj); //false here obj will return 100 thats why its false
console.log(100==obj); //true here obj will return 100 thats why its true


    2.Strict Equality Comparison (===)
    Both the Abstract Equality and Strict Equality  check the type
    . if the type(x) is different from type(y) return false.
    . if Type(x) is number  then
        a. if x is NaN, return false. 
        b. if y is NaN, return false.
        c. if x is same Number value as y, return true.
        d. if x is +0 and y is -0 then true and vice versa is also true.

        console.log(NaN===NaN)// false
        console.log(0===-0) // true
        console.log("NaN"==NaN) //false

        let obj1={x:10};
        let obj2={x:10};
        let obj3={y:10};
if x and y are the same object value, return true otherwise false. 
        console.log(obj1===obj2)// false
        console.log(obj1===obj3) // false
        console.log(obj1===obj1) // true same memory object/ location

        console.log({x:10}==={x:10}) // false.. both are created at different memory location

let obj ={};
console.log(obj);
console.log("18"+ obj) // "18" "[object object] --> "18[object object]"
console.log(18+ obj); // 18 "[object object]" --> "18[object object]"

ToBoolean:
    1.undefined, null, NaN, +0, -0, false are falsy value and rest are truthy value means return true.
    2. If argument is one of undefined, null, +0𝔽, -0𝔽, NaN, 0ℤ, or the empty String, return false.

let x =10;
console.log(!x)// false
let y= undefined;
console.log(!y)// true

if(y) {
    console.log("it is truthy")
}
else {
    console.log("it is falsy")
}
//o/p--it is falsy


ToString.
    undefined return "undefined"
    Null return "null"
    Boolena return "true" "false"

console.log("" +0); // 0 0-> "0"
console.log("" +(-0)) // 0 -0--> 0

console.log(""+[]) // blank space []--> ""
console.log(""+{}) //[object object]

console.log(""+[1,2,3]) //1,2,3
console.log(""+[null, undefined]) // , 
console.log(""+[1,2,null,4]) //1,2,,4

//tonumber

console.log(0-"010")// -10 //decimal number
console.log(0-"o10") // NaN
console.log(0-010) // -8 010 take as octal value 
console.log(0-"0xb) // -11 hexadecimal
console.log(0-0xb) // -11 hexadecimal
console.log(1-[]); // 1
console.log([]-1) // -1
console.log([""]-1) // -1 
console.log(["0"]-1) // -1 

why to use Abstract equality? do more check and easy to understand some test cases in better way.


console.log(1<2<3); // (1<2) true --> true< 3 -> 1<3 -> true
console.log(3>2>1);// (3>2) = true --> true >1 -> 1>1 ->false

-- NaN
console.log(Number("123")); //123
console.log(Number("abcd")); //NaN
console.log(Number("0xa")); //10

let x=NaN;
console.log(x==NaN);// false

console.log(isNaN(x)); //true

console.log(isNaN("Raja"));  //true //isNaN converts the incoming input to a number
console.log(Number.isNaN("Raja"));// false
console.log(number.isNaN(x)); //true

if(typeof(x)==='number' && x !=== x){
    console.log(true);
} o/p true

y=12; when y= NaN then  true otherwise false
if(typeof(y)==='number' && y !=== y){
    console.log(true);
} o/p false

let x=-0;
console.log(x===0); //true
console.log(Object.is(x,-0));//true
console.log(Object.is(x,0));// false

console.log(Math.sign(-3));//-1
console.log(Math.sign(2));//1
console.log(Math.sign(-0));//-0
console.log(Math.sign(0));//0

Boxing in js.
Boxing is the process in which a primitive value is wrapped in an Object. When a primitive type is treated as an object, e.g., calling the toUpperCase() function, JavaScript would automatically wrap the primitive type into the corresponding object type. This new object type is then linked to the related built-in <.prototype>, so you can use prototype methods on primitive types.