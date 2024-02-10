// Tasks: (Don't use promises only use callbacks)
//1. write a function to download data from a url.
// 2. write a function to save that downloaded data in a file and return the filename.
// 3. write a function to upload the file written in previous step to a newurl

//1.
function download( url, cb){
    /*
    Downloads content from the previous url and passed the
    download content to the given callback cb
    */

    console.log("Starting to download data from", url);
    setTimeout(function down(){
        console.log("Downloading Completed");
        const content ="ABCDEF";
        cb(content);
        
    }, 4000)
}

download("www.xyz.com", function process(content) {
    console.log("Downloaded data is", content);
})
/* o/p--
Starting to download data from www.xyz.com
Downloading Completed
Downloaded data is ABCDEF
*/