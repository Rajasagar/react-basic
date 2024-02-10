/*
In JavaScript an iterator is an object which defines a sequence 
and potentially a return value upon its termination.
like we open the tap and get the data.

*/

function fetchNextElement(array) {
    let idx=0;
    function next() {
        if (idx ==array.length) {
                return {value:undefined, done: true};
        }
        const nextElement = array[idx];
        idx++;
        return { value: nextElement, done: false };
    }
    return {next};
}

const automaticFetcher = fetchNextElement([99,100,11,12,0,4,5,6,7]) // inside automatic fetcher variable we can store next function

console.log(automaticFetcher.next());
console.log(automaticFetcher.next());
console.log(automaticFetcher.next());
console.log(automaticFetcher.next());
console.log(automaticFetcher.next());
console.log(automaticFetcher.next());
/*
{ value: 99, done: false }
{ value: 100, done: false }
{ value: 11, done: false }
{ value: 12, done: false }
{ value: 0, done: false }
{ value: 4, done: false }
------
with every iterator u get the next function.
calling this will fetch data for u.
this next function will return value and done property.
value: actual value u fetched by calling next
done: whether u consumed all the value from the collection or not.

*/