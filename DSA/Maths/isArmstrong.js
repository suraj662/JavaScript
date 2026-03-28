//checks number is armstrong or not ---
//For example, 153 has 3 digits → 1³ + 5³ + 3³ = 1 + 125 + 27 = 153

function isArmstrong(n) {
    const digits = String(n).split('');
    const power = digits.length;
    let sum =0;

    for(let i=0;i<digits.length; i++){
        sum = sum + Math.pow(Number(digits[i]),power);
    }

    return sum === n;

}

//test case
console.log(isArmstrong(153)); //true
console.log(isArmstrong(123)); //false
console.log(isArmstrong(9474)); //true