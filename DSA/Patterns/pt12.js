//reverse Hollow Pyramid
function reverseHollowPyramid(n){
    let sp = 0;
    let st = 2*n-1;
    for(let i=1;i<=n;i++){
        let str = '';
        for(let j=1;j<=sp;j++){
            str = str + ' ';
        }
        for(let k=1;k<=st;k++){
            if(i === 1 || k === 1 || k === st){
                str = str + '*';
            }
            else{
                str = str + ' ';
            }
        }
        console.log(str);
        sp++;
        st -= 2;
        
    }
}
reverseHollowPyramid(5);