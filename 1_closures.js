function process(){
    let i=0;
    function innerprocess() {
        i+=1; // this i is coming from the process scope.
        return i;
    }
    return innerprocess;// we are not calling the function, we are just returning.

}

let res=process();
console.log(res);

console.log("first time calling res", res());
console.log("second time calling res", res());
console.log("third time calling res", res());
console.log("fourth time calling res", res());
/*
op--
[Function: innerprocess]
first time calling res 1
second time calling res 2
third time calling res 3
fourth time calling res 4

 i value get updated when u call the function.
-------------------------------
During the paring phase, the scope resolution of i variable is done.

the closure property u have which is attached to this function, the closures will
remember all those variable that are getting access inside the function whose scope
might be in the function or might outside ur function. it remember the memory 
location of the variable. and make them a persistent storage.
it is closing over value  that means its remembering the scope of the varaible
*/