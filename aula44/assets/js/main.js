const form = document.querySelector(".form");

function eventForm(event) {
  event.preventDefault();

  const weight = form.querySelector("#weight");
  const height = form.querySelector("#height");
  const result = document.querySelector("#result");

  let imc =
    Number(weight.value) / (Number(height.value) * Number(height.value));
  imc = imc.toFixed(1);
  console.log(imc);

  if (imc < 18.5) {
    result.innerHTML = `Your IMC is ${imc} and you're bellow weight`;
    result.style.height = "30px";
    result.style.background = "#db2c2c";
  } else if (imc >= 18.5 && imc <= 24.9) {
    result.innerHTML = `Your IMC is ${imc} and your weight is normal`;
    result.style.height = "30px";
    result.style.background = "#11ab56";
  } else if (imc >= 25 && imc <= 29.9) {
    result.innerHTML = `Your IMC is ${imc} and you're on overweight`;
    result.style.height = "30px";
    result.style.background = "#db2c2c";
  } else if (imc >= 30 && imc <= 34.9) {
    result.innerHTML = `Your IMC is ${imc} and you're on the 1º degree of obesity`;
    result.style.height = "30px";
    result.style.background = "#db2c2c";
  } else if (imc >= 35 && imc <= 39.9) {
    result.innerHTML = `Your IMC is ${imc} and you're on the 2º degree of obesity`;
    result.style.height = "30px";
    result.style.background = "#db2c2c";
  } else if (imc > 40) {
    result.innerHTML = `Your IMC is ${imc} and you're on the 3º degree of obesity`;
    result.style.height = "30px";
    result.style.background = "#db2c2c";
  } else {
    result.innerHTML = `Invalid Informations`;
    result.style.height = "30px";
    result.style.background = "black";
  }
}

form.addEventListener("submit", eventForm);
