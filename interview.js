console.log("hello world");

setTimeout( function exec() {
    console.log("time done")
}, 0);

console.log("end")
 /*o/p--> hello world
          end
          time done
    */

 /*
 this time doesn't disturb main sync flow of js.
 i.e., js sync single thread behaviour is non blocking. any run time feature
 is not going to block the core execution of ur js statement.
 that moment time end. the call back send to event queue. the call back will wait here
 till the global code is always done or not. when u print end 
 post that u have event queue that is constantly runnning again and again to check whether
 all of the global piece of code is done or not and everything in the call stack is empty or not
 then only it is going to start picking the exec function and transfer to call stack
 and it start executing and print it.
 */
/* your js code is non blocking that means the exec callback is not 
    going block ur core  flow of ur code first global code will run 
    the exec callback will run. it will keep on waiting in event queue.
    event loop will check whethere any thing left in global code
    and stack is empty or not. if yes then event queue callback transfer to
    stack and then it run.
*/

console.log("Hello")
for (let i=0; i<3;i++){
    setTimeout( function exec(){
        console.log("timer done")
    }, 10);
}

for(let i=0; i<100000000;i++){
    //some task
}
console.log("end");

/*
o/p:--- 
hello
end
timer done
timer done
timer done
any async piece of code cannot of hamper/ come in between of sync code
*/
