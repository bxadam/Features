document.getElementById("bmiForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const weight = parseFloat(document.getElementById("weight").value);
  const height = parseFloat(document.getElementById("height").value);

  const bmi = weight / ((height / 100) * (height / 100));

  const resultDiv = document.getElementById("result");
  resultDiv.innerHTML = "Your BMI is: " + bmi;
  console.group(resultDiv);
});
