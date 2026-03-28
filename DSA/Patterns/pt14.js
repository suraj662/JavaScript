// hollow diamond

function hollowDiamond(n){
    let sp = n - 1;
    let st = 1;

    // upper pyramid
    for(let i = 1; i <= n; i++){
        let str = '';

        for(let j = 1; j <= sp; j++){
            str += ' ';
        }

        for(let k = 1; k <= st; k++){
            if(k === 1 || k === st){
                str += '*';
            } else {
                str += ' ';
            }
        }

        console.log(str);
        sp--;
        st += 2;
    }

    // lower inverted pyramid
    sp = 1;
    st = 2*n - 3;

    for(let i = n-1; i >= 1; i--){
        let str = '';

        for(let j = 1; j <= sp; j++){
            str += ' ';
        }

        for(let k = 1; k <= st; k++){
            if(k === 1 || k === st){
                str += '*';
            } else {
                str += ' ';
            }
        }

        console.log(str);
        sp++;
        st -= 2;
    }
}

hollowDiamond(5);