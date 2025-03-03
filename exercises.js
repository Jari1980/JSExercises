

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