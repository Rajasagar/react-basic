console.log("Start of the file");

setTimeout(function timer1(){
    console.log("Timer 1 done");
}, 0);

for (let i=0; i<1000000000;i++){
    //something
}
/*
function f(){
    return new Promise(function exec(resolve, reject){
        resolve("Raja's Promise");
    });
};
*/
//above function f and below Promise.resolve is same we can use both.

let x = Promise.resolve("Raja's promise");
x.then(function processPromise(value){
    console.log("Whose promise ?", value);
});

setTimeout(function timer2(){
    console.log("Timer 2 is done");
}, 0);

console.log("End of the file");

/*
o/p--
Start of the file
End of the file
Whose promise ? Raja's promise
Timer 1 done
Timer 2 is done
*/