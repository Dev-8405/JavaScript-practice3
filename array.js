let arr =[ 10 ,40 , 50 , 60 , 80];
let largest =arr[0];

for(let i =1; i<arr.length; i++){
    if(arr[i]>largest){
        largest =arr[i];
    }
}

console.log(largest);