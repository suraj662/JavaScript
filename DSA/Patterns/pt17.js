//hollow pyramid with number boundary and aplhabet inside
/*
      1
    1 A 1
  1 A B C 1
 1 A B C D 1
1 A B C D E 1
*/

function hollowNumAlphaPyramid(n){
    let sp = n-1;
    let st = 1;
    for(let i=1;i<=n;i++){
        let str = '';
        for(let j=1;j<=sp;j++){
            str = str + ' ';
        }
        for(let k=1;k<=st;k++){
            if(k === 1 || k === st){
                str = str + 1;
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
hollowNumAlphaPyramid(5);