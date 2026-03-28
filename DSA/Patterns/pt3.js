//mirrored right angle triangle --
/*
*
**
***
****
*****
*/

function mirroredRtTriangle(n){
    
    for(let i=1;i<=n;i++){
        let str ='';
        for(let j=1;j<=n-i;j++){
            str = str + ' ';
        }
        for(let k=1;k<=i;k++){
            str = str + '*';
        }
        console.log(str);
    }
}

mirroredRtTriangle(5);