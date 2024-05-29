const form = document.querySelector("form");
// this usecase will give you empty value
// const weight = parseInt(document.querySelector('#weight').value)

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const height = parseInt(document.querySelector("#height").value);
    const weight = parseInt(document.querySelector("#weight").value);
    const result = document.querySelector("#results");
    if (height === "" || height < 0 || isNaN(height)) {
        result.innerHTML = ` <br> Please give a valid height ${height}`;
    } else if (weight === "" || weight < 0 || isNaN(weight)) {
        result.innerHTML = ` <br>Please give a valid weight ${weight}`;
    } else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);

        if (bmi >= 0 && bmi <= 18.6) {
            result.innerHTML = ` <br><span> Your bmi is ${bmi}</span>  <br> You are Under Wight trying to eat Food`;
        } else if (bmi >= 18.6 && bmi <= 24.9) {
            result.innerHTML = ` <br><span> Your bmi is ${bmi}</span> <br>You are safe `;
        } else {
            result.innerHTML = ` <br><span> your bmi is ${bmi}</span> <br> You in Overweight trying to avoid food `;
        }
    }
});
