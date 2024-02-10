function blocking_for_loop(){
    for(let i=0; i<100000000;i++){
        //something
    }
}
console.log("start of the file");
setTimeout( function timer1(){
    console.log("Timer 1 is done");
},0 );

blocking_for_loop();

let x = Promise.resolve("Raja's promise1");
x.then(function processPromise(value){
    console.log("whose Promise ? ", value);
    blocking_for_loop();
});

let y = Promise.resolve("Raja's promise2");
y.then( function processPromise(value){
    console.log("whose promise ?", value);
    setTimeout( function (){
        console.log("ok done");
    },0);
});

let z = Promise.resolve("Raja's promise3");
z.then(function processPromise(value){
    console.log("whose promise?", value);
});

setTimeout( function timer2(){
    console.log("Timer 2 is done")
}, 0);

console.log("end of the file")

/*
op--

start of the file
end of the file
whose Promise ?  Raja's promise1
whose promise ? Raja's promise2
whose promise? Raja's promise3
Timer 1 is done
Timer 2 is done
ok done
*/