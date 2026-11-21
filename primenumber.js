let num = 7;
let isprime= true;

if(num<1){
    isprime=false;
}

for(let i =2; i<num; i++){
    if(num % 1 === 0){
        isprime =true;
    }
}

console.log(isprime?"prime":"not a prime");

