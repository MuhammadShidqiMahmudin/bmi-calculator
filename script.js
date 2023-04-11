function calculateBMI() {
    // Get input values
    var weight = parseFloat(document.getElementById("weight").value);
    var height = parseFloat(document.getElementById("height").value);
    
    // Calculate BMI
    var bmi = weight / Math.pow(height/100, 2);
    bmi = bmi.toFixed(1); // Round to 1 decimal place
    
    // Determine BMI category
    var category;
    if (bmi < 18.5) {
        category = "Underweight";
    } else if (bmi < 25) {
        category = "Normal weight";
    } else if (bmi < 30) {
        category = "Overweight";
    } else {
        category = "Obesity";
    }
    
    // Display result
    var resultElement = document.getElementById("result");
    resultElement.innerHTML = "BMI: " + bmi + "<br>Category: " + category;
}