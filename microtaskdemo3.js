function fetchData(url){
    return new Promise(function(resolve, reject){
        console.log("Started downloading from", url);
        setTimeout(function processDownloading(){
            let data = "Dummy data";
            console.log("downloading completed");
            resolve(data);

        }, 7000);
    });
}

console.log("start");
let promiseObj= fetchData("dfjgljsdl");
promiseObj.then(function A(value){
    console.log("value is", value);
})
console.log("end")

/*
op--
start
Started downloading from dfjgljsdl
end
downloading completed
value is Dummy data
*/