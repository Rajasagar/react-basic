function createPromise(){
    return new Promise(function exec(resolve, reject) {
        console.log("Resolving the promise");
        resolve("Done")
    });
}

setTimeout(function process(){
    console.log("Timer Completed");
}, 0);

let p =  createPromise();
p.then(function fulfillHandler (value){
    console.log("we fulfilled1 with a value",value);
}, function rejectHandler() {});
p.then(
  function fulfillHandler(value) {
    console.log("we fulfilled2 with a value", value);
  },
  function rejectHandler() {}
);
p.then(
  function fulfillHandler(value) {
    console.log("we fulfilled3 with a value", value);
  },
  function rejectHandler() {}
);

for(let i=0; i<10000000;i++){}
console.log("Ending");
/*
op--
Resolving the promise
Ending
we fulfilled1 with a value Done
we fulfilled2 with a value Done
we fulfilled3 with a value Done
Timer Completed
*/
/*
 so we have following:
  callback stack
  callback queue
  runtime
  event loop
  microtask queue
  new promise objects.

  first setTimeout function will execute and store in runtime 
  and after that it goes to createPromise function call and store in callback stack.
  meanwhile the timer is already done. so process callback  will store in callback queue
  and event loop continuesoly check whether the callstack empty or not.
  callstack create a new promise  and print the "Resolving the promise"
  in the promise object state is fullfilled and done is store.

  event loop check stack is empty but global piece of code is left so it can't touch the
  callback queue process function.
  p.then now it will register fulfillHandler inside the onfulfillment array.
  in the array we register the all the fulfillHandler as fh1 fh2 fh3
  and it will store in microtask queue
  [fh1,fh2,fh3]
  eventloop again check whether i run microtask or not no because we have global piece of code left
  that is for loop
  after all the global piece is done and stack is empty 
  we have option to run either callback queue or microtask queue. 
  so here...,,,,,
at any point of time ,if event loop has a choice to pick from microtask queue or callback queue
(macrotask queue) the it always give preference to microtask queue.

so fh1 will run first and fh2 and fh3 and done
now microtask queue is empty then callback queue will be come into process.
 and end ...


so points are:::----
1. at any point of time ,if event loop has a choice to pick from microtask queue or callback queue
(macrotask queue) the it always give preference to microtask queue.
2. when promise is fulfilled it may fulfilled immediately or after sometime.the moment it
fulfilled what are the function are there in onfulfillment array, all come to into microtask queue
and seat back tight and wait for whole exection be to completed
*/