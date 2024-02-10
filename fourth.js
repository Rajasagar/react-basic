function timeConsumingByLoop(){
    console.log("loops starts");
    for(let i=0; i<10000000; i++){
        // some task
    }
    console.log('loops ends')
}

function timeConsumingByRuntimeFeature0(){
    console.log("starting timer")
    setTimeout(function exec(){
        console.log("completed the timer0");
        for(let i=0; i<100000000; i++){
            //some task
        }
    }, 5000); //5 sec timer
}

function timeConsumingByRuntimeFeature1(){
    console.log("starting timer")
    setTimeout(function exec(){
        console.log("completed the timer1");
        for(let i=0; i<100000000; i++){
            //some task
        }
    }, 0); //0 sec timer
}

function timeConsumingByRuntimeFeature2() {
  console.log("starting timer");
  setTimeout(function exec() {
    console.log("completed the timer2");
    for (let i = 0; i < 100000000; i++) {
      //some task
    }
  }, 200); //200 ms timer
}

console.log("HI");
timeConsumingByLoop();
timeConsumingByRuntimeFeature0();
timeConsumingByRuntimeFeature1();
timeConsumingByRuntimeFeature2();
timeConsumingByLoop();
console.log("BY");
/* output
HI
loops starts
loops ends
starting timer
starting timer
starting timer
loops starts
loops ends
BY
completed the timer1
completed the timer2
completed the timer0
*/
/*
in the event loops feature1 feature2 and feature0 will store a/c to the time 
and it go to call stack after the all the no global code is there. event loop is checking all the time whether call stack us empty or not
so above o/p will print that way
*/