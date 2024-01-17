const n = [1,2,3,4,5,6,7,8,9];
function myArrayMin(arr){
    return Math.min.apply(null,arr);
}
console.log(myArrayMin(n));

function myArrayMax(arr){
    return Math.max.apply(null,arr);
}
console.log(myArrayMax(n));