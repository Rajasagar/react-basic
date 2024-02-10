/*
function download(url, cb){
    console.log("Started downloading after 5sec");
    setTimeout( function exec (){
        console.log("Completed downloading after 5 sec")
        const content = "ABCDEF"
        cb(content);
    }, 5000);
}

download('www.xyz.com', function processDownload(data){
    console.log("downloaded data is", data);
})
*/

/*
o/p---
Started downloading after 5sec
Completed downloading after 5 sec
downloaded data is ABCDEF

if we call two times callback  cb(content); cb(content);
then it will be print two times
Started downloading after 5sec
Completed downloading after 5 sec
downloaded data is ABCDEF
downloaded data is ABCDEF
*/

//two resolve the issue we have some called promise.

function download(url){
    console.log("started downloading content from", url);
    return new Promise(function exec(res, rej){
        setTimeout(function p(){
            console.log("Completed downloading data in 5s");
            const content =" ABCDEF";
            res(content);
        }, 5000);
    })
}

download("www.xyz.com")
.then(function fulfilHandler(value){
    console.log("content downloaded is", value);
})

/*
started downloading content from www.xyz.com
Completed downloading data in 5s
content downloaded is  ABCDEF

here u r not providing the control of the fulfilHandler to the download function
*/

/*
if we want to execute the handle two times then we use then .then like below
x=download("www.xyz.com")
x.then(function fulfilHandler(value){
    console.log("content downloaded is1", value);
});

x.then(function fulfilHandler(value){
    console.log("content downloaded is2", value);
});
*/