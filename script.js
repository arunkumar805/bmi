document.getElementById('bmiForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get height and weight values from form
    let height = parseFloat(document.getElementById('height').value) / 100; // Convert height to meters
    let weight = parseFloat(document.getElementById('weight').value);

    // Calculate BMI
    let bmi = weight / (height * height);

    // Display result
    let resultElement = document.getElementById('result');
    resultElement.innerHTML = `<h2>Your BMI is: ${bmi.toFixed(1)}</h2>`;

    // Display BMI category
    let bmiCategory;
    if (bmi < 18.5) {
        bmiCategory = 'Underweight';
    } else if (bmi < 24.9) {
        bmiCategory = 'Normal weight';
    } else if (bmi < 29.9) {
        bmiCategory = 'Overweight';
    } else {
        bmiCategory = 'Obese';
    }

    resultElement.innerHTML += `<p>You are ${bmiCategory}</p>`;
});
