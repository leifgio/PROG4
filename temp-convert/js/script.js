/* set id to variable to increase readability of code */
var cel = document.getElementById("celsius");
var far = document.getElementById("farenheit");

/* convert celsius to farenheit */
function celToFar() {
  var celsius = document.getElementById("num").value;
  var farenheit = Math.round((celsius * 9) / 5 + 32);
  alert("the converted value of celsius to farenheit is " + farenheit);
}

/* convert farenheit to celsius */
function farToCel() {
  var farenheit = document.getElementById("num").value;
  var celsius = Math.round(((farenheit - 32) * 5) / 9);
  alert("the converted value of farenheit to celsius is " + celsius);
}

/* choose what function to use */
function convert() {
  if (cel.checked) {
    celToFar();
  } else if (far.checked) {
    farToCel();
  }
}

/* add event listener to button */
var x = document.getElementById("convert");
x.addEventListener("click", function () {
  convert();
});
