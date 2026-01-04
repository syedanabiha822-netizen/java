// Q1: City Greeting
function cityGreeting() {
  let city = prompt("Enter your city name");
  if (city.toLowerCase() === "karachi") {
    alert("Welcome to the city of lights");
  } else {
    alert("Welcome to " + city);
  }
}



// Q2: Gender Greeting
function genderGreeting() {


  let gender = prompt("Enter your gender");

  if (gender.toLowerCase() === "male") {
    alert("Good Morning Sir");
  } else if (gender.toLowerCase() === "female") {
    alert("Good Morning Ma’am");
  } else {
    alert("Invalid input");
  }
}

// Q3: Traffic Signal
function trafficSignal() {
  let color = prompt("Enter traffic signal color");

  if (color.toLowerCase() === "red") {
    alert("Must Stop");
  } else if (color.toLowerCase() === "yellow") {
    alert("Ready to move");
  } else if (color.toLowerCase() === "green") {
    alert("Move now");
  } else {
    alert("Invalid color");
  }
}

// Q4: Fuel Check
function fuelCheck() {
  let fuel = +prompt("Enter remaining fuel in liters");

  if (fuel < 0.25) {
    alert("Please refill the fuel in your car");
  } else {
    alert("Fuel is sufficient");
  }
}

// Q5: Marksheet



function marksheet() {
  let totalMarks = 300;
  let m1 = +prompt("Enter marks of Subject 1");
  let m2 = +prompt("Enter marks of Subject 2");
  let m3 = +prompt("Enter marks of Subject 3");

  
  let obtained = m1 + m2 + m3;
  let percentage = (obtained / totalMarks) * 100;

  let grade, remarks;

  if (percentage >= 80) {
    grade = "A-one";
    remarks = "Excellent";
  } else if (percentage >= 70) {
    grade = "A";
    remarks = "Good";
  } else if (percentage >= 60) {
    grade = "B";
    remarks = "You need to improve";
  } else {
    grade = "Fail";
    remarks = "Sorry";
  }



  
  alert(
    "Total Marks: " + totalMarks +
    "\nObtained Marks: " + obtained +
    "\nPercentage: " + percentage.toFixed(2) + "%" +
    "\nGrade: " + grade +
    "\nRemarks: " + remarks
  );
}
