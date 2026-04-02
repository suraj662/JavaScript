//for loop in js --

//print 0 to 9 --
// for(let i=0;i<10;i++){
//     const ele = i;
//     console.log(ele);
// }

//console.log(ele); //error - ele is not defined

// for(let i=0;i<5;i++){
//     const ele =i;
//     if(i%2 == 0){
//         console.log(ele + "is even");
//     }
//     console.log(ele);
// }


//in backtick --
// for(let i=0;i<=10;i++){
//     console.log(`outer loop value: ${i}`);
//     for(let j=0;j<=10;j++){
//         console.log(`Inner loop value: ${j} and outer loop value: ${i}`);
//     }
// }

//multiplication table of 0 to 10 -- 
// for(let i=0;i<=10;i++){
//     console.log(`outer loop value: ${i}`);
//     for(let j=0;j<=10;j++){
//         console.log(i + '*' + j + '= ' + i*j);
//     }
// }



//in array 
// const myArr = ["flash" , "batman" , "superman"];
// console.log(myArr.length); //3
// for(let i=0;i<myArr.length; i++){
//     const ele = myArr[i];
//     console.log(ele);
// }


//break and continue in loop --
for(let i=0;i<=10;i++){
    if(i==5){
        console.log("detected 5");
        break; 
    }
    console.log(i);
}


for(let i=0;i<=10;i++){
    if(i==5){
        console.log("detected 5");
        continue; 
    }
    console.log(i);
}


