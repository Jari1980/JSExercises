

// Exercise 1

let dateDefault = new Date();
let dd = dateDefault.getDay();
let mm = dateDefault.getMonth();
let yyyy = dateDefault.getFullYear();

let para10 = document.getElementById("p10");
para10.innerHTML += dateDefault;

let para11 = document.getElementById("p11");
para11.innerHTML += mm + "-" + dd + "-" + yyyy;

let para12 = document.getElementById("p12");
para12.innerHTML += mm + "/" + dd + "/" + yyyy;

let para13 = document.getElementById("p13");
para13.innerHTML += dd + "-" + mm + "-" + yyyy;

let para14 = document.getElementById("p14");
para14.innerHTML += dd + "/" + mm + "/" + yyyy;


// Exercise 2

exercise2Form.onsubmit = async (e) => {
    e.preventDefault();
    if((exercise2.value % 4 == 0) && (exercise2.value % 100 != 0) || (exercise2.value % 400 == 0)){
        p2.innerHTML = (exercise2.value + " is a leap year.").bold();
    }
    else{
        p2.innerHTML = (exercise2.value + " is a Not leap year.").bold();
    }
    
    document.getElementById("exercise2Form").reset()
    //alert(exercise2.value)
}


// Exercise 3

let para3 = document.getElementById("p3");

function exercise3(){
    let p3Toggle = document.getElementById("p3");
    if (p3Toggle.style.display === "none"){
        p3Toggle.style.display = "block";
    }
    else{
        p3Toggle.style.display = "none"
    }
}

for(let i = 2014; i < 2025; i++){
    let date = new Date(i + ("-01-01"));
    if(date.getDay() == 0){
        para3.innerHTML += "<li>" + i + " Sunday" + "</li>"
    }
    else{
        para3.innerHTML += "<li>" + i + " not a Sunday" + "</li>"
    }
}
