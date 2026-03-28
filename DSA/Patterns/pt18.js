//hollow pyramid with increasing number boundary and alphabet inside
/*
    1
   2A2
  3ABC3
 4ABCDE4
5ABCDEFG5
*/

function hollowIncNumAlphaPyramid(n){
    let sp = n-1;
    let st = 1;
    for(let i=1;i<=n;i++){
        let str = '';
        for(let j=1;j<=sp;j++){
            str = str + ' ';
        }
        for(let k=1;k<=st;k++){
            if(k === 1 || k === st){
                str = str + i;
            }
            else{
                str = str + String.fromCharCode(64+k-1);
            }
        }
        sp--;
        st += 2;
        console.log(str);
    }
}
hollowIncNumAlphaPyramid(5);

