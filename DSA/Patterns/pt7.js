//hollow mirrored right angle triangle 

function hmrt(n){
    for(let i=1;i<=n;i++){
        let str="";
        for(let j=1;j<=n-i;j++){
            str = str + ' ';
        }
        for(let k =1;k<=i;k++){
            if(i === n|| k === 1 || i === k){
                str = str + '*';
            }
            else{
                str = str + ' ';
            }
        }
        console.log(str);
    }
}
hmrt(5);