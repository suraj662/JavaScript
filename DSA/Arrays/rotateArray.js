let myArr = [1,2,3,4,5];
let k=2;
let n = myArr.length;
let roated = new Array(n);


for(let i=0;i<n;i++){
    roated[(i+k)%n] = myArr[i];
}

console.log(roated);


