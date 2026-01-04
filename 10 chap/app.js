function checkTemp() {
  var temp = document.getElementById("temp").value;
  var result = document.getElementById("result");

  if (temp > 40) {
    result.innerText = "It is too hot outside.";
  } 
  else if (temp > 30) {
    result.innerText = "The Weather today is Normal.";
  } 
  else if (temp > 20) {
    result.innerText = "Today’s Weather is cool.";
  } 
  else if (temp > 10) {
    result.innerText = "OMG! Today’s weather is so Cool.";
  } 
  else {
    result.innerText = "Very cold weather!";
  }
}
