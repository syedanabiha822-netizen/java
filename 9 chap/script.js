function marks(){
  let s1 = prompt("Subject 1");
  let s2 = prompt("Subject 2");
  let s3 = prompt("Subject 3");


  
  let m1 = +prompt("Marks 1");
  let m2 = +prompt("Marks 2");
  let m3 = +prompt("Marks 3");
  let total = m1 + m2 + m3;
  let per = (total / 300) * 100;
  let grade, remarks;

  if(per >= 80){
    grade = "A+";
    remarks = "Excellent";
  } else if(per >= 70){
    grade = "A";
    remarks = "Very Good";
  } else if(per >= 60){
    grade = "B";
    remarks = "Good";
  } else if(per >= 50){
    grade = "C";
    remarks = "Needs Improvement";
  } else {
    grade = "Fail";
    remarks = "Better Luck Next Time";
  }

  document.getElementById("show").innerHTML =
  "<table border='1' cellpadding='8'>" +
  "<tr><th>Subject</th><th>Marks</th></tr>" +
  "<tr><td>"+s1+"</td><td>"+m1+"</td></tr>" +
  "<tr><td>"+s2+"</td><td>"+m2+"</td></tr>" +
  "<tr><td>"+s3+"</td><td>"+m3+"</td></tr>" +
  "<tr><th>Total</th><th>"+total+"</th></tr>" +
  "<tr><th>Percentage</th><th>"+per.toFixed(2)+"%</th></tr>" +
  "<tr><th>Grade</th><th>"+grade+"</th></tr>" +
  "<tr><th>Remarks</th><th>"+remarks+"</th></tr>" +
  "</table>";
}