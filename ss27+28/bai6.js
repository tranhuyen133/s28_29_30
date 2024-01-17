var number = [1,3,5,7,9,2,4,6,8];
var n = 0; ;
var trunggian = 1;
for(var i = 0; i < n - 1; i++){
    for(var j = i + 1; j < n; j ++){
        if(number[i] > number[j]){
            trunggian = number[i];
            number[i] = number[j];
            number[j] = trunggian;
        }
    } 
for(var i = 0; i < n; i++){
    console.log(number[i]);
}
}