//merge two sorted arrray - 
let Arr1 = [1,5,7];
let Arr2 = [2,3,4];
let Arr3 = new Array(Arr1.length + Arr2.length);
let n =Arr1.length;
let m = Arr2.length;

let i=0; 
let j =0;
let k =0;

while(i<n && j <m){
    if(Arr1[i] < Arr2[j]){
        Arr3[k++] = Arr1[i++];
    }
    else{
        Arr3[k++] = Arr2[j++];
    }
}

while(i<n){
    Arr3[k++] = Arr1[i++];
}

while(j<m){
    Arr3[k++] = Arr2[j++];
}

console.log(Arr3);