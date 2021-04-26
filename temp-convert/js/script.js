/* set id to variable to increase readability of code */
var cel = document.getElementById("celsius");
var far = document.getElementById("farenheit");

/* convert celsius to farenheit and limit to two decimal places*/
function celToFar() {
  var celsius = document.getElementById("num").value;
  var farenheit = ((celsius * 9) / 5 + 32);
  farenheit = farenheit.toFixed(2); /* method to limit decimal places*/
  alert("the converted value of celsius to farenheit is " + farenheit + "℉");
}

/* convert farenheit to celsius */
function farToCel() {
  var farenheit = document.getElementById("num").value;
  var celsius = (((farenheit - 32) * 5) / 9);
  celsius = celsius.toFixed(2);
  alert("the converted value of farenheit to celsius is " + celsius+ "℃");
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
