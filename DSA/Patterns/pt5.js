//HRAT - hollow Right Angled Triangle

function HRAT(n){
    
    for(let i=1;i<n;i++){
        let str = "";
        for(let j=1;j<=i;j++){
            if(i === 1 || j === n || i === j || j === 1){
                str = str + '*';
            }
            else{
                str = str + ' ';
            }
            
        }
        console.log(str);
    }
}

HRAT(5);