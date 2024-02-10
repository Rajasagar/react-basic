function createPromise() {
  return new Promise(function exec(resolve, reject) {
    setTimeout(function() {
        console.log("Rejecting the promise");
        reject("Done");
    
  }, 1000);
});
}


let p = createPromise();
p.then(
  function fulfillHandler(value) {
    console.log("we fulfilled1 with a value", value);
  },
  function rejectHandler(value) {
    console.log("we reject1 with  a value", value)
  }
);

p.then(
  function fulfillHandler(value) {
    console.log("we fulfilled2 with a value", value);
  },
  function rejectHandler(value) {
    console.log("we reject2 with  a value", value);
  }
);

for (let i = 0; i < 10000000; i++) {}
console.log("Ending..");
/*
Ending..
Rejecting the promise
we reject1 with  a value Done
we reject2 with  a value Done
*/