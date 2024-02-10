Callback:
    HOF are those function which take a function as a argumnet, the function u pass as an agrument is callback function.

callback problems:
    1.inversion of control
    2.callback hell -readbility problems
Asynchronous JavaScript, or JavaScript that uses callbacks, is hard to get right intuitively. A lot of code ends up looking like pramind strcuture:

The word 'asynchronous', aka 'async' just means 'takes some time' or 'happens in the future, not right now'. Usually callbacks are only used when doing I/O, e.g. downloading things, reading files, talking to databases, etc.

inversion of control.
 The Inversion-of-Control (IoC) pattern, is about providing any kind of callback, which "implements" and/or controls reaction, instead of acting ourselves directly (in other words, inversion and/or redirecting control to the external handler/controller).
 The Dependency-Injection (DI) pattern is a more specific version of IoC pattern, and is all about removing dependencies from your code.

 Every DI implementation can be considered IoC, but one should not call it IoC, because implementing Dependency-Injection is harder than callback (Don't lower your product's worth by using the general term "IoC" instead).
 eg using define one function in which we  are charging extra money for delivery any items.

 This HOF is used by some other team for there work. if something happens in HOF so u face some issue.
 due to callback i am passing control of how exec should be called to function this is inversion of control. 

JS is sync in nature. and js is single threaded.
javascript run first line of code then go to next line of code.
JavaScript is a synchronous, blocking, single-threaded language. That just means that only one operation can be in progress at a time.
eg:--
console.log("hi we are starting")
for(let i=0; i<1000000000;i++){
    //code
}
console.log(done)
// above code print first "hi we are starting " then for loop the done

note: all of is applicable if we execute valid ecmascript code which is given by standards.

console.og("HI")
setTimeout(function() {
    console.log("time done")
    }, 5000);

console.log("BYE")

// above code will print like HI by after 5 second time done print.
why this happens??

we never pause async piece of code execution.it is runtime feature.it will store in event queue. after the js code execution done. we take the data from the event queue. and print that. so HI By and time done print.

event loop:-- it keeps checking whether the call stack is empty or not. and no global code is left. and after that it going to pick one call back from the event loop push to the call stack and now stack start its execution.

Q.< is console.log also an async feature?>
how console.log will behaves is highly dependent on runtime.if runtime will give synchronous api it will work as synchronous and if doesn't then it will be work as asynchronous.

The setInterval() method, offered on the Window and WorkerGlobalScope interfaces, repeatedly calls a function or executes a code snippet, with a fixed time delay between each call.

Promises: The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

    - In JavaScript, a promise is an object used for handling asynchronous operations. It represents the eventual completion or failure of a task and allows you to attach callbacks that will be executed when the task is either successfully completed (fulfilled) or encounters an error (rejected). 

    - A promise can be in one of three states: pending, fulfilled, or rejected. It provides a clean and structured way to work with asynchronous code, making it easier to manage and reason about asynchronous tasks.

    solves problem likes
    - Readability enhances
    - They can solve the problem of IOC(inversion of control)

    - in js, promised are special types of objects that get returned immediately when we call them.
    - promises acts as a placeholder for the data we hope to get back sometime in future.
        x= fetch("https://www.xyz.com")
        assume fetch is written using promise then it will immediately return a promise object which will act as a placeholder(for the result x).
    - in this promise object we can attach the functionality we want to execute once the future task is done.
    once the future task is done promises will automatically execute the attached functionality.

Important part of promises.
    1. how we can create a promise??
    2. how can we consume a promise??

Promise are native to js. and handling to it sync in nature. so creation of a promise object is sync in nature.

A Promise is in one of these states:

pending: initial state, neither fulfilled nor rejected.
fulfilled: meaning that the operation was completed successfully.
rejected: meaning that the operation failed.

    promise have two things -- state and value 
    state--- pending, fulfilled, rejected
    value- either undefined or some value of argumnet of resolve or reject functions.

syntax of new promise:
    new promise(f) -- this constrcctor expects a callback.
                    -- f is called sometime as executor function.


new promise ( function (resolve, reject){
    // inside this function we can write our time consuming task.
})
 - resolve and reject are function or in-build function

// better examples.
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("foo");
  }, 300);
});

myPromise
  .then(handleFulfilledA, handleRejectedA)
  .then(handleFulfilledB, handleRejectedB)
  .then(handleFulfilledC, handleRejectedC);

In a JavaScript promise, `resolve` and `reject` are functions provided by the promise executor function (the function passed to the `Promise` constructor) to control the fate of the promise—whether it should be fulfilled or rejected.

1. **`resolve` function:**
   - When called, it signifies that the asynchronous operation represented by the promise has completed successfully.
   - It accepts an optional value (result) as an argument, indicating the successful outcome of the operation.
   - After calling `resolve`, the promise transitions from the "pending" state to the "fulfilled" state.

```javascript
const myPromise = new Promise((resolve, reject) => {
  // Successful asynchronous operation
  const result = "Operation completed successfully";
  resolve(result); // Transition to the fulfilled state with the result
});
```

2. **`reject` function:**
   - When called, it indicates that the asynchronous operation has encountered an error or failed in some way.
   - It accepts an optional reason (an error or failure message) as an argument.
   - After calling `reject`, the promise transitions from the "pending" state to the "rejected" state.

```javascript
const myPromise = new Promise((resolve, reject) => {
  // Simulate a failure in the asynchronous operation
  const errorReason = "Operation failed";
  reject(errorReason); // Transition to the rejected state with the reason
});
```

By using `resolve` and `reject`, you control the flow of your asynchronous code and determine whether the promise should be considered successful (fulfilled) or unsuccessful (rejected). This facilitates better error handling and result management in asynchronous operations.

can we return from resolve or reject?

