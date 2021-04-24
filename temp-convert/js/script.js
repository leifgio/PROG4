var cel = document.getElementById("celsius");
var far = document.getElementById("farenheit");

function celToFar() {
  var celsius = document.getElementById("num").value;
  var farenheit = Math.round((celsius * 9) / 5 + 32);
  alert("the converted value of celsius to farenheit is " + farenheit);
}

function farToCel() {
  var farenheit = document.getElementById("num").value;
  var celsius = Math.round(((farenheit - 32) * 5) / 9);
  alert("the converted value of farenheit to celsius is " + celsius);
}

function convert() {
  if (cel.checked) {
    celToFar();
  } else if (far.checked) {
    farToCel();
  }
}

/* var x = document.getElementById("convert");
x.addEventListener("click", function () {
  celToFar();
}); */

var x = document.getElementById("convert");
x.addEventListener("click", function () {
  convert();
});
