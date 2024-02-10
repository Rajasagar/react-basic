function getRandomInt(max){
    return Math.floor(Math.random()* max);
}

function createPromiseWithLoop(){
    return new Promise (function executor (resolve, reject) {
        for(let i=0; i<1000000000; i++){}
        let num = getRandomInt(10);
        if (num %2==0){
            // if the random number is even we fulfill
            resolve(num);
        }
        else{
            //if the random number is odd we reject
            reject(num);
        }
    });
}
let x= createPromiseWithLoop();
console.log(x)
/* above code will wait for the loop to complete and promise run
give any of the output reject or fulfilled.
*/