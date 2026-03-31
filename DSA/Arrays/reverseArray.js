let myArr1 = [1,2,3,4,5];

function rev(arr){

    let st =0;
    let end =arr.length-1;
    while(st <end){
       let temp = arr[st];
       arr[st] = arr[end];
       arr[end] = temp;
       st++;
       end--;
       break;
    }
    return arr;
}

//let myArr1 = [1,2,3,4,5];

console.log(rev(myArr1));