

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