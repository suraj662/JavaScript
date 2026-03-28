//hirat - hollow inverted right angle triangle 

function hirat(n){
    for(let i=n;i>=1;i--){
        let str = "";
        for(let j=1;j<=i;j++){
            if(i === n || j === 1 || i === j || j === i){
                str = str + '*';
            }
            else{
                str = str +  ' ';
            }
        }
        console.log(str);
    }
}

hirat(5);