function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function createPromiseWithTimeout() {
  return new Promise(function executor(resolve, reject) {
    setTimeout (function (){
        let num = getRandomInt(10);
        if (num % 2 == 0) {
          // if the random number is even we fulfill
          resolve(num);
        } else {
          //if the random number is odd we reject
          reject(num);
        }
    }, 5000);
  });
}
let y = createPromiseWithTimeout();
console.log(y);


/* it immediately return u promise thats is pending state. 
and after 5 second it either return fulfilled or rejected.
we do not have wait for code to be completed just like in callback
 promise resolve this issue.

so promise give u same kind of feeling with a sync piece of code that 
it will wait till complete and u have async piece of code then it will
trigger async piece of code to ur runtime thats it you immeditely get
promise objects.


what if we pass multiple  params in resolve or rejects??
ans-- it doesn't matters whether u pass multiple params it will set
the first value to promise result value
*/