//inverted right Angle Triangle --
function invertRtTraingle(n){
    let str = "";
    for(let i=n;i>=1;i--){
        for(let j=1;j<=i;j++){
            str = str+ '*';
        }
        str = str + '\n';
    }
    console.log(str);
}

invertRtTraingle(5);