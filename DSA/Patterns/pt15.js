//number Pyramid pattern 
/*
    1
   222
  33333
 4444444
555555555
*/


function numPyramid(n){
    let sp = n-1;
    let st = 1;
    for(let i=1;i<=n;i++){
        let str = '';
        for(let j=1;j<=sp;j++){
            str = str + ' ';
        }
        for(let k=1;k<=st;k++){
            str = str + i;
        }
        sp--;
        st += 2;
        console.log(str);
    }
}
numPyramid(5);

