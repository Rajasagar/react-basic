function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

// example 1
/*
function createPromiseWithTimeout() {
  return new Promise(function executor(resolve, reject) {
    setTimeout (function (){
        let num = getRandomInt(10);
        if (num % 2 == 0) {
          // if the random number is even we fulfill
          console.log("fulfilling")
          return num;
        } else {
          //if the random number is odd we reject
          console.log("rejecting")
          return num;
        }
    }, 5000);
  });
}
let y = createPromiseWithTimeout();
console.log(y);
*/
/*op-  Promise { <pending>}
either fulfiling or rejecting
here state of promise is still in pending state because we neither called 
resolve or reject.
state of promise is chance when we called resolve or reject function.
*/

// example 2
/*
function createPromiseWithTimeout() {
  return new Promise(function executor(resolve, reject) {
    setTimeout (function (){
        let num = getRandomInt(10);
        if (num % 2 == 0) {
          // if the random number is even we fulfill
          console.log("fulfilling")
          resolve(num);
          console.log("completed resolving");
          return num;
        } else {
          //if the random number is odd we reject
          console.log("rejecting")
          reject(num);
          console.log("completed rejected");
          return num;
        }
    }, 5000);
  });
}
let y = createPromiseWithTimeout();
console.log(y);
*/

/*
Promise { <pending> }
fulfilling
completed resolving
here, promise state chance to resolve.
here it will be work sync code and it go with the flow.
*/

// example 3
//
function createPromiseWithTimeout() {
  return new Promise(function executor(resolve, reject) {
    setTimeout (function (){
        let num = getRandomInt(10);
        if (num % 2 == 0) {
          // if the random number is even we fulfill
          console.log("fulfilling")
          resolve(num);
          console.log("completed resolving");
          resolve(10);
          console.log("resolving again")
          return num;
        } else {
          //if the random number is odd we reject
          console.log("rejecting")
          reject(num);
          console.log("completed rejected");
          reject(11);
          console.log("rejecting again")
          return num;
        }
    }, 5000);
  });
}
let y = createPromiseWithTimeout();
console.log(y);
//
/*
Promise { <pending> }
rejecting
completed rejected
rejecting again
here, promise state chance to reject.
here it will be work sync code and it go with the flow.
when we see in promise value it  is 5 not 10.
once you resolve or reject you promise object, thats means once you 
chance the state of your promise state it can never be updated.
*/