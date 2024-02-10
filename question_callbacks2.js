// Tasks: (Don't use promises only use callbacks)
//1. write a function to download data from a url.
// 2. write a function to save that downloaded data in a file and return the filename.
// 3. write a function to upload the file written in previous step to a newurl

//1.
function download(url, cb) {
  /*
    Downloads content from the previous url and passed the
    download content to the given callback cb
    */

  console.log("Starting to download data from", url);
  setTimeout(function down() {
    console.log("Downloading Completed");
    const content = "ABCDEF";
    cb(content);
  }, 4000);
}

function writeFile(data, cb) {
  /*
    writes  the given data into a new file
    */
  console.log("Started writing a file with", data);
  setTimeout(function write() {
    console.log("Completed writing the data in a file");
    const filename = "file.txt";
    cb(filename);
  }, 5000);
}

function upload(url, file, cb) {
  /*
    upload the data  from a file to a given url
    */
  console.log("started uploading", file, "on", url);
  setTimeout(function up() {
    console.log("upload completed");
    const response = "success";
    cb(response);
  }, 2000);
}

download("www.xyz.com", function processDownload(content){
    console.log("We are going to process the downloaded data");
    writeFile(content, function processWrite(filename){
        console.log("we have downloaded and written the file , now will upload");
        upload("www.upload.com", filename, function processUpload(response){
            console.log("we have uploaded with", response)
        });
    });
});
// above become callbacks hells
/*
Starting to download data from www.xyz.com
Downloading Completed
We are going to process the downloaded data
Started writing a file with ABCDEF
Completed writing the data in a file
we have downloaded and written the file , now will upload
started uploading file.txt on www.upload.com
upload completed
we have uploaded with success
*/



// download("www.xyz.com", function process(content) {
//   console.log("Downloaded data is", content);
// });

// writeFile("abcdsef", function process(name) {
//     console.log("file written with name", name);
// })
/*
Started writing a file with abcdsef
Completed writing the data in a file
file written with name file.txt
*/
