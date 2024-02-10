function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

//
function createPromiseWithTimeout() {
  return new Promise(function executor(resolve, reject) {
    console.log("Entering the exector callback in the  promise constructor");
    setTimeout(function () {
      let num = getRandomInt(10);
      if (num % 2 == 0) {
        // if the random number is even we fulfill
        console.log("fulfilling");
        resolve(num);
      } else {
        //if the random number is odd we reject
        console.log("rejecting");
        reject(num);
      }
    }, 5000);
    console.log("Exitting the exector callback in the promise constructor");
  });
}

console.log("starting......");

const p = createPromiseWithTimeout();
console.log("we are now waiting for the promise to complete");
console.log("Cuurenlty my promise object is like ... ", p);
console.log("Going  to register my 1st set of handlers");
p.then(
  function fulfilHandler(value) {
    console.log("inside fulfill handler1 with value", value);
    console.log("promise after fulfillment is", p);
  },

  function rejectHandler(value) {
    console.log("inside rejection handler with value", value);
    console.log("promise after rejection is", p);
  }
);

console.log("Going  to register my 2nd set of handlers");

p.then(
  function fulfilHandler(value) {
    console.log("inside fulfill handler 2 with value", value);
    console.log("promise after fulfillment is", p);
  },

  function rejectHandler(value) {
    console.log("inside rejection handler with value", value);
    console.log("promise after rejection is", p);
  }
);

console.log("ending.....")

/*
multiple p.then regsiter multiple handler will regsiter.
*/
/*
starting......
Entering the exector callback in the  promise constructor
Exitting the exector callback in the promise constructor
we are now waiting for the promise to complete
Cuurenlty my promise object is like ...  Promise { <pending> }
Going  to register my 1st set of handlers
Going  to register my 2nd set of handlers
ending.....
fulfilling
inside fulfill handler1 with value 2
promise after fulfillment is Promise { 2 }
inside fulfill handler 2 with value 2
promise after fulfillment is Promise { 2 }
*/