//hollow Pyramid 

function hollowPyramid(n){
    let sp = n-1;
    let st = 1;
    for(let i=1;i<=n;i++){
        let str = '';
        for(let j=1;j<=sp;j++){
            str = str + ' ';
        }
        for(let k=1;k<=st;k++){
            if(i === n || k === 1 || k === st){
                str = str + '*';
            }
            else{
                str = str + ' ';
            }
        }
        console.log(str);
        sp--;
        st += 2;
        
    }
}
hollowPyramid(5);