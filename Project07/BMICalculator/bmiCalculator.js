const form = document.querySelector('form');
console.log(form);
// this usecase will give you empty
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit' , function(e) {
    //prevent the default behaviour of form submission which is to refresh the page
    e.preventDefault();
    //parseInt is used to convert the string value from the input field to a number
    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    //height is in cm and we need to convert it to meters for BMI calculation
    //console.log(height , weight);
    // Display the result in the result div
    const result = document.querySelector('#results');

    if(height === '' || height <0 || isNaN(height)){
        result.innerHTML = `Please enter a valid height ${height}`;
    }
    else if(weight === '' || weight <0 || isNaN(weight)){
        result.innerHTML = `Please enter a valid weight ${weight}`;
    }
    else {
        //calculate BMI using the formula: weight (kg) / [height (m)]^2
        //tofixed(2) is used to round the result to 2 decimal places
        const bmi = (weight / ((height *height) / 10000)).toFixed(2);
        // Display the result in the result in span
        //span is used to style the result in css
        result.innerHTML = `<span> ${bmi} </span>`;
        //display bmi category based on the bmi value
        if(bmi < 18.5){
            result.innerHTML += `<span> Underweight </span>`;
        }
        else if(bmi >= 18.5 && bmi < 24.9){
            result.innerHTML += `<span> Normal weight </span>`;
        }
        else if(bmi >= 25 && bmi < 29.9){
            result.innerHTML += `<span> Overweight </span>`;
        }
        else {
            result.innerHTML += `<span> Obesity </span>`;
        }
    }
})