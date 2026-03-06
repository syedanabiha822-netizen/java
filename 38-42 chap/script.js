// ================== QUESTION 1 ==================
function power(a, b) {
    let result = 1;
    for (let i = 0; i < b; i++) {
        result = result * a;
    }
    return result;
}
console.log("Power:", power(2,3));


// ================== QUESTION 2 ==================
function leapYear(year){
    if((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)){
        return "Leap Year";
    } else {
        return "Not a Leap Year";
    }
}
console.log("Year check:", leapYear(2024));


// ================== QUESTION 3 ==================
function calculateS(a,b,c){
    return (a+b+c)/2;
}

function triangleArea(a,b,c){
    let s = calculateS(a,b,c);
    let area = Math.sqrt(s*(s-a)*(s-b)*(s-c));
    return area;
}
console.log("Triangle Area:", triangleArea(3,4,5));


// ================== QUESTION 4 ==================
function average(m1,m2,m3){
    return (m1+m2+m3)/3;
}

function percentage(m1,m2,m3){
    let total = m1+m2+m3;
    return (total/300)*100;
}

function mainFunction(m1,m2,m3){
    console.log("Average:", average(m1,m2,m3));
    console.log("Percentage:", percentage(m1,m2,m3) + "%");
}

mainFunction(80,90,70);


// ================== QUESTION 5 ==================
function myIndexOf(str, char){
    for(let i=0;i<str.length;i++){
        if(str[i] === char){
            return i;
        }
    }
    return -1;
}

console.log("Custom index:", myIndexOf("hello","l"));


// ================== QUESTION 6 ==================
function removeVowels(sentence){
    let result = "";
    let vowels = "aeiouAEIOU";

    for(let i=0;i<sentence.length;i++){
        if(!vowels.includes(sentence[i])){
            result += sentence[i];
        }
    }
    return result;
}

console.log("Without vowels:", removeVowels("Hello World"));


// ================== QUESTION 7 ==================
function countDoubleVowels(text){
    let count = 0;

    for(let i=0;i<text.length-1;i++){
        let pair = text[i] + text[i+1];

        switch(pair){
            case "aa": case "ae": case "ai": case "ao": case "au":
            case "ea": case "ee": case "ei": case "eo": case "eu":
            case "ia": case "ie": case "ii": case "io": case "iu":
            case "oa": case "oe": case "oi": case "oo": case "ou":
            case "ua": case "ue": case "ui": case "uo": case "uu":
                count++;
        }
    }

    return count;
}

console.log("Double vowels:", countDoubleVowels("Pleases read this application and give me gratuity"));


// ================== QUESTION 8 ==================
function meters(km){
    return km*1000;
}

function feet(km){
    return km*3280.84;
}

function inches(km){
    return km*39370.1;
}

function centimeters(km){
    return km*100000;
}

let km = 5;

console.log("Meters:", meters(km));
console.log("Feet:", feet(km));
console.log("Inches:", inches(km));
console.log("Centimeters:", centimeters(km));


// ================== QUESTION 9 ==================
function overtimePay(hours){
    if(hours > 40){
        let overtime = hours - 40;
        return overtime * 12;
    }
    else{
        return 0;
    }
}

console.log("Overtime Pay:", overtimePay(45));


// ================== QUESTION 10 ==================
function currencyNotes(amount){

    let hundred = Math.floor(amount/100);
    amount = amount % 100;

    let fifty = Math.floor(amount/50);
    amount = amount % 50;

    let ten = Math.floor(amount/10);

    console.log("100 notes:", hundred);
    console.log("50 notes:", fifty);
    console.log("10 notes:", ten);
}

currencyNotes(380);