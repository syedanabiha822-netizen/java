let output = document.getElementById("output");

// Q1
function q1() {
  let arr = [[], [], []];
  output.innerHTML = "Empty Multidimensional Array:<br>" + JSON.stringify(arr);
}

// Q2
function q2() {
  let matrix = [
    [0, 1, 2, 3],
    [1, 0, 1, 2],
    [2, 1, 0, 1],
  ];
  output.innerHTML = matrix.join("<br>");
}

function q3() {
  let res = "";
  for (let i = 1; i <= 10; i++) {
    res += i + " ";
  }
  output.innerHTML = res;
}

// Q4
function q4() {
  let num = +prompt("Enter table number");
  let len = +prompt("Enter length");
  let res = "";
  for (let i = 1; i <= len; i++) {
    res += `${num} x ${i} = ${num * i}<br>`;
  }
  output.innerHTML = res;
}

// Q5
function q5() {
  let fruits = ["apple", "banana", "mango", "orange", "strawberry"];
  let res = "";
  for (let i = 0; i < fruits.length; i++) {
    res += fruits[i] + "<br>";
  }
  output.innerHTML = res;
}
// Q6
function q6() {
  let res = "<b>Counting:</b><br>";
  for (let i = 1; i <= 15; i++) res += i + ", ";

  res += "<br><b>Reverse:</b><br>";
  for (let i = 10; i >= 1; i--) res += i + ", ";
  res += "<br<b>reverse</b><br>"

  res += "<br><b>Even:</b><br>";
  for (let i = 0; i <= 20; i += 2) res += i + ", ";

  res += "<br><b>Odd:</b><br>";
  for (let i = 1; i <= 19; i += 2) res += i + ", ";

  res += "<br><b>Series:</b><br>";
  for (let i = 2; i <= 20; i += 2) res += i + "k, ";

  output.innerHTML = res;
}




// Q7
function q7() {
  let items = ["cake", "apple pie", "cookie", "chips", "patties"];
  let search = prompt("Enter item").toLowerCase();

  if (items.includes(search)) {
    output.innerHTML = search + " is available";
  } else {
    output.innerHTML = search + " is not available";
  }
}

// Q8
function q8() {
  let A = [24, 53, 78, 91, 12];
  let max = Math.max(...A);
  output.innerHTML = "Largest Number: " + max;
}

// Q9
function q9() {
  let A = [24, 53, 78, 91, 12];
  let min = Math.min(...A);
  output.innerHTML = "Smallest Number: " + min;
}


// Q10
function q10() {
  let res = "";
  for (let i = 5; i <= 100; i += 5) {
    res += i + ", ";
  }
  output.innerHTML = res;
}