function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

//
function createPromiseWithTimeout() {
  return new Promise(function executor(resolve, reject) {
    console.log("Entering the exector callback in the  promise constructor");
    setTimeout (function (){
        let num = getRandomInt(10);
        if (num % 2 == 0) {
          // if the random number is even we fulfill
          console.log("fulfilling")
          resolve(num);

        } else {
          //if the random number is odd we reject
          console.log("rejecting")
          reject(num);
        }
    }, 5000);
    console.log("Exitting the exector callback in the promise constructor");
  });
}

console.log("starting......")

const p = createPromiseWithTimeout();
console.log("we are now waiting for the promise to complete");
console.log("Cuurenlty my promise object is like ... ", p);
p.then(
  function fulfilHandler(value) {
    console.log("inside fulfill handler with value", value);
    console.log("promise after fulfillment is" , p);
  },

  function rejectHandler(value) {
    console.log("inside rejection handler with value", value);
    console.log("promise after rejection is", p);
  }
);
/*
starting......
Entering the exector callback in the  promise constructor
Exitting the exector callback in the promise constructor
we are now waiting for the promise to complete
Cuurenlty my promise object is like ...  Promise { <pending> }
fulfilling
inside fulfill handler with value 8
promise after fulfillment is Promise { 8 }
*/

/*
How internally promise execute??

when u create a promise we have following:
  value
  state
  onfulfillment: array[]
  onRejection: array[]

inside these array we get multiple function, these function are expected to be executed
once the promise is either resolve or reject.

when the function createPromiseWithTimeout called happen it goes to callstack and store
and return a new promise and in the memory new promise objects is created.
in memory object following thing are there:
  state: pending
  value: undefined
  onfulfillment: array[]
  onRejection: array[]

after that setTimeOut function called and it goes to runtime for 5 sec.
and next line execute.
return something and store in promise objects. and call stack is empty.

.then parts--
  p.then register handler for ur promise objects. i.e., when promise is fulfiled or
  function u need to execute when u register the function
  onfulfillment: array[] here in this array it will be register in promise objects.
  onRejection: array[] here in this array it will be register

after that setTimeOut function it went to callback queue and event loop
check whether call stack is empty or not. if yes empty then function in the
queue transfer to stack and function execution start. after random number
generate and it will goes either if or else
consider as 6 it will resolve the promise
  state: pending change to resolve
  value: undefined  change to 6
  onfulfillment: array[] here onfulfillment will start the execution and return what they have
  onRejection: array[]

  end.

  note: .then is like a register. it register ur fulfillment handler
  or rejection handler.
  
*/
