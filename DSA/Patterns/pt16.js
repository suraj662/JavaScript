//increasing number of pyramid

function incNumPyramid(n){
    let sp = n-1;
    let st = 1;
    for(let i=1;i<=n;i++){
        let str = '';
        for(let j=1;j<=sp;j++){
            str = str + ' ';
        }
        for(let k=1;k<=st;k++){
            str = str + k;
        }
        sp--;
        st += 2;
        console.log(str);
    }
}
incNumPyramid(5);

