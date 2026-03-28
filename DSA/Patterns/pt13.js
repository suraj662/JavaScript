//Diamond pattern 

function diamond(n){
    let sp = n-1;
    let st = 1;
    for(let i=1;i<=n;i++){
        let str = '';
        for(let j=1;j<=sp;j++){
            str = str + ' ';
        }
        for(let k=1;k<=st;k++){
            str = str + '*';
        }
        sp--;
        st += 2;
        console.log(str);
    }
    sp = 1;
    st = 2*n - 3;
    for(let i=1;i<n;i++){
        let str = '';
        for(let j=1;j<=sp;j++){
            str = str + ' ';
        }
        for(let k=1;k<=st;k++){
            str = str + '*';
        }
        sp++;
        st -= 2;
        console.log(str);
    }
}
diamond(5);