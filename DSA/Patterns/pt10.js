//inverted pyramid

function inPyramid(n){
    let sp =0;
    let st = 2*n-1;
    for(let i=n;i>=1;i--){
        let str='';
        for(let j=1;j<=sp;j++){
            str = str + ' ';
        }
        for(let k=1;k<=st;k++){
            str = str + '*';
        }
        console.log(str);
        sp++;
        st -= 2;
        
    }
}
inPyramid(5);