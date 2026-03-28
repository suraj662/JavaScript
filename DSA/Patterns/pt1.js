//right angle triangle * pattern

function rtAngleTriangle(n){
    
    for(let i=1;i<=n;i++){
        let str ='';
        for(let j=1;j<=i;j++){
            str = str + '*';
        }
        console.log(str);
    }
}
console.log(rtAngleTriangle(5)); 