function download(url){
    return new Promise( function exec(resolve, reject){
          console.log("Starting to download data from", url);
          setTimeout(function down() {
            console.log("Downloading Completed");
            const content = "ABCDEF";
            resolve(content);
          }, 6000);
    })
}

function writeFile(data) {
    return new Promise( function exec(resolve, reject){
          console.log("Started writing a file with", data);
          setTimeout(function write() {
            console.log("Completed writing the data in a file");
            const filename = "file.txt";
            resolve(filename);
          }, 5000);
    } )
}


function uploadData(file, url){
    return new Promise(function exec(resolve, response) {
        console.log("Stared uploading", file, "on", url);
        setTimeout(function up() {
            console.log("upload completed");
            const response = "success";
            resolve(response);
        }, 2000);
    })
}

download("www.xyz.com")
.then( function processDownload(value) {
    console.log("downloading  done with the following value", value);
    return writeFile(value);
})
.then(function processWrite(value){
    console.log("data written in the file with name", value);
    return uploadData(value,"www.upload.com");

})
.then(function processUpload(value){
    console.log("We have uploaded with", value);
});

/* o/p--
Starting to download data from www.xyz.com
Downloading Completed
downloading  done with the following value ABCDEF
Started writing a file with ABCDEF
Completed writing the data in a file
data written in the file with name file.txt
Stared uploading file.txt on www.upload.com
upload completed
We have uploaded with success
*/