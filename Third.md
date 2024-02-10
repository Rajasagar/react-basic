HOF - Higher order function thats depends and operates on other functon
    there are function which take another function as argument or return a function as agrument  and then executes the logic
function f(x, fn){
    console.log(x) // 10
    console.log(fn) // o/p [function exec]
    fn(); // execute the function and it give o/p as I am an expression passed to a HOF

}
f(10, function exec()){
    console.log("I am an expression passed to a HOF")
}

Map function: Map is HOF avaiable with arrays. 
it takes a function as an argument -> f
it returns an array in which every value is actually populated by calling function f with original array element as argument.

when to use map?
 In any suitation when er have to do an operation on every element of the array and store the result of each opeartion. we can use map.


function  square(el){
    return el*el; // returns square
}
const arr=[1,2,3,4,5]

const result =arr.map(square);// square is function passed as an argument.
console.log(result); //[1,4,9,16,25]

Getting index at with maps.
const newArr=[9,8,7,6,5]
/**
if the function that we are passing in map takes two arguments then 
first argument will be accessign the acutal value second will be accessing the index of the value
**/

function print(element, idx){
    return `Element at index ${idx} is ${element}`;
}

const result2 = newArr.map(print)
console.log(result2);
o/p:  Element at index 0 is 9
o/p:  Element at index 1 is 8
o/p:  Element at index 2 is 7
o/p:  Element at index 3 is 6
o/p:  Element at index 4 is 5

Custom map:
function customMapper(Arr, func){
    let result=[]
    for(let i=0; i<arr.length; i++){
        result.push(func(arr[i]), i);
    }
    return result;
}
const value = customMapper(newArr, print);
console.log(value);
same as above o/p

Sort HOF:
the function takes a comparator function as argument.

b=[1,10,9,100,1000,11,12,13,14,2,3]
b.sort(function (a,b){
    // if a < b -> a-b will be negative -> if cmp function gives negative then a is places before b (a<b)
    // if a > b -> a-b will be positive -> if cmp function gives positivr then b is places before a (a>b)
    return a-b ;
})
console.log(b)
// o/p 1,2,3,9,10,11,12,13,14,100,1000

filter HOF:
filter also loops over the array element.
there is one special things about filter, .i.e. the argument function  f which we have to pass inside filter should always return a boolean otherwise o/p will be converted into boolean,

filter loops over every element, passed that element in the argument function and then if the o/p of this function call is true, the it stores the original element in a new array otherwise doesn't add this add element to the array.

function oddOrEven(x){
    return (x%2==0) // returning a boolean
}

let arr = [1,2,3,4,5,6]
const result = arr.filter(oddOrEven);
console.log(result) // o/p [2,4,6]

Reduce: it is HOF avaiable for arrays.
reduce also takes a function f as an agruments.
what reduce does is, it one by one goes to every element of the array, 
say the current element is arr[i] reduce will pass this element to the function f, and accumulate the result of further functions calls with this particular result,

const arr=[1,2,3,4,5,6];
function sum(prevResult, currValue){
    return prevResult+currValue;
}
const result = arr.reduce(sum)l
console.log(result) //o/p-21

/*
first element ->2
second element ->3
third element ->4
fourth element ->5
fifth element ->6

*/
carts examples
function addPrices(prevResult, currValue){
    console.log(prevResult,currValue);
    let newPrice = prevResult.price + currValue.price;
    return {price: newPrice}
}

let cart = [{price: 100000, name:"iphone"},{price:50 , name:"backcover"},{price: 30, name="charge}]
const totalPrice = cart. reduce(addPrices);
console.log(totalPrice.price); //100080
