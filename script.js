function convertTemp() {
  const temp = parseFloat(document.getElementById('temp').value);
  const unit = document.getElementById('unit').value;
  const result = document.getElementById('result');

  if (isNaN(temp)) {
    result.innerText = "Enter a valid number";
    return;
  }

  let output;

  if (unit === 'c') {
    output = (temp * 9/5) + 32;
    result.innerText = output.toFixed(2) + " °F";
  } else {
    output = (temp - 32) * 5/9;
    result.innerText = output.toFixed(2) + " °C";
  }
}