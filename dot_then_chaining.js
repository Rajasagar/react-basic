/*
 the .then function return a new promise objects. it immediately return a new promise objects.

*/
function download(url) {
  console.log("started downloading content from", url);
  return new Promise(function exec(res, rej) {
    setTimeout(function p() {
      console.log("Completed downloading data in 5s");
      const content = " ABCDEF";
      res(content);
    }, 5000);
  });
}

x = download("www.xyz.com")
x
.then(
    function fulfilHandler(value) {
    console.log("content downloaded is", value);
    return "New Promoise string"
    },

    function rejectHandler(value){
        console.log("rejected with", value)
    }
)
.then (
    function newFullFillHandler(value){
        console.log("Value from chained then promise", value);
    }
)
/*
o/p --
started downloading content from www.xyz.com
Completed downloading data in 5s
content downloaded is  ABCDEF
Value from chained then promise New Promoise string
*/