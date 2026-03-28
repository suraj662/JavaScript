//Inverted Mirrored Right Triangle Pattern
/*
* * * * *
  * * * *
    * * *
      * *
        *
*/

function InvertedMirroredRtTraingle(n){
    let str = "";
    for(let i=n;i>=1;i--){
        for(let j=1;j<=n-i;j++){
            str = str + '  ';
        }
        for(let k=1;k<=i;k++){
            str = str + '* ';
        }
        str = str + '\n';
    }
    console.log(str);
}
InvertedMirroredRtTraingle(5);