

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


// Exercise 4

exercise4Form.onsubmit = async (e) => {
    e.preventDefault();

    let val1 = exercise41.value;
    let val2 = exercise42.value;
    if(val2 == 0){
        p4.innerHTML = "Cant divide by 0".bold();
    }
    else{
        p4.innerHTML = (val1 + " * " + val2 + " = " + val1*val2 + "<br>" + val1 + " / " + val2 + " = " + val1/val2).bold()
    }
    
    document.getElementById("exercise4Form").reset()
}


// Exercise 5

exercise5Form.onsubmit = async (e) => {
    e.preventDefault();

    let val1 = exercise5.value;
    let val2 = document.querySelector('input[type=radio]:checked').value
    
    //alert(val2)
    if(val2 === "Celsius"){
        p5.innerHTML = ((val1 - 32) * 5 / 9 + "C").bold();
    }
    else{
        p5.innerHTML = ((val1 * 9/5) + 32 + "F").bold();
    }
    
    document.getElementById("exercise5Form").reset()
}


// Exercise 6

exercise6Form.onsubmit = async (e) => {
    e.preventDefault();

    let inputText = exercise61.value;
    let index = exercise62.value;
    let index2 = index.value + 1;

    console.log(index)
    const t1 = inputText.slice(0, index);
    const mm = Number(1) + Number(index); 
    console.log(index + mm)
    const t2 = inputText.slice(mm);
    const t3 = t1 + t2;

    p6.innerHTML =  t3
    
    document.getElementById("exercise6Form").reset()
}


// Exercise 7

exercise7Form.onsubmit = async (e) => {
    e.preventDefault();

    let inputText = exercise7.value;
    let res = inputText.split('').reverse().join('');
    console.log(res);

    p7.innerHTML =  res
    document.getElementById("exercise6Form").reset()
}


// Exercise 8

exercise8Form.onsubmit = async (e) => {
    e.preventDefault();

    let inputText = exercise8.value;
    let stringArr = inputText.split(' ');
    let sum = 0;
    
    for(let i = 0; i < stringArr.length; i++){
        let num = (parseInt(stringArr[i], 10));
        sum = sum + num;
    }
    p8.innerHTML =  sum
    document.getElementById("exercise8Form").reset()
}


// Exercise 9

exercise9Form.onsubmit = async (e) => {
    e.preventDefault();

    let inputText = exercise9.value;
    let stringArr = inputText.split(' ');
    let largest = Number.MIN_VALUE;
    
    for(let i = 0; i < stringArr.length; i++){
        let num = (parseInt(stringArr[i], 10));
        if(num > largest){
            largest = num;
        }
    }
    p9.innerHTML =  largest;
    document.getElementById("exercise9Form").reset()
}


// Exercise 10

exercise10Form.onsubmit = async (e) => {
    e.preventDefault();

    let inputText = exercise10.value;
    let stringArr = inputText.split(' ');
    let numArr = [];
    
    for(let i = 0; i < stringArr.length; i++){
        let num = (parseInt(stringArr[i], 10));
        if(num % 2 != 0){
            console.log(num);
            numArr.push(num);
        }
    }

    let res = "";
    for(let j = 0; j < numArr.length; j++){
        res = "" + numArr[j].toString() + " " + res;
    }
    //console.log(res);
    p100.innerHTML = res; 
    document.getElementById("exercise10Form").reset()
}


// Exercise 11

exercise11Form.onsubmit = async (e) => {
    e.preventDefault();

    let inputText = exercise11.value;
    let stringArr = inputText.split(' ');
    let numArr = [];
    
    for(let i = 0; i < stringArr.length; i++){
        let num = (parseInt(stringArr[i], 10));
        if(num % 2 == 0){
            console.log(num);
            numArr.push(num);
        }
    }

    let res = "";
    for(let j = 0; j < numArr.length; j++){
        res = "" + numArr[j].toString() + " " + res;
    }
    //console.log(res);
    p111.innerHTML = res; 
    document.getElementById("exercise11Form").reset()
}

// Exercise 12

exercise12Form.onsubmit = async (e) => {
    e.preventDefault();

    let inputText = exercise12.value;
    let stringArr = inputText.split(' ');
    let numArr = [];
    
    for(let i = 0; i < stringArr.length; i++){
        let num = (parseInt(stringArr[i], 10));
        numArr.push(num);
    }

    let squaredNumbs = numArr.map((element) => element * element);
    squaredNumbs.reverse();

    let res = "";
    for(let j = 0; j < squaredNumbs.length; j++){
        res = "" + squaredNumbs[j].toString() + " " + res;
    }
    
    p122.innerHTML = res; 
    document.getElementById("exercise12Form").reset()
}


// Exercise 13

let para133 = document.getElementById("p133");
let person = {name: "Snus", age: 20, adress: "Storstan"};

para133.innerHTML = "Person name: " + person.name.valueOf() + ", age: " + person.age.valueOf() + ", adress: " + person.adress.valueOf();

function exercise13(){
    let p3Toggle = document.getElementById("p133");
    if (p3Toggle.style.display === "none"){
        p3Toggle.style.display = "block";
    }
    else{
        p3Toggle.style.display = "none"
    }
}


// Exercise 14 //Not really happy with this solution but it does the trick

let candy = {name: "Broccoli"};

function exercise14(){
    exercise144(candy)
}

function exercise144(candyObj){
    p144.innerHTML = candyObj.name.valueOf();
}


// Exercise 15

let Candy = {name: "Broccoli"};

function exercise151(){
    addProp(Candy);
}

function addProp(CandyObj, property){
    Object.defineProperty(CandyObj, "isGood", {value: true, configurable: true})
    p15.innerHTML = "Object properties: " + Object.getOwnPropertyNames(Candy);
}


function exercise152(){
    Object.getOwnPropertyDescriptor(Candy, "isGood");
    delete Candy.isGood;
    delete Candy["isGood"];
    p15.innerHTML = "Object properties: " + Object.getOwnPropertyNames(Candy);
   
}


// Exercise 16

let personP = {
    name: "snusMannen",
    age: 20,
    adress: {
        city: "StoraStaden",
        country: "Sweden"
    }
}

function exercise16(){
    p16.innerHTML = "object properties: " + Object.getOwnPropertyNames(personP) + "<br>"
                    + "name: " + personP.name.valueOf() + ", age: " + personP.age.valueOf() + ", adress: " + personP.adress.valueOf() + "<br>"
                    + "adress: " + personP.adress.city.valueOf() + " " + personP.adress.country.valueOf();
}


// Exercise 17

let comps = {PC: 90, Amiga500: 100, C64: 80, AtariST: 70, Maccintosch: 5};

Object.filter = (obj, predicate) => 
    Object.keys(obj)
          .filter( key => predicate(obj[key]) )
          .reduce( (res, key) => Object.assign(res, { [key]: obj[key] }), {} );

function exercise171(){
    p17.innerHTML = Object.getOwnPropertyNames(comps);
}

function exercise172(){
    let compsFiltered = Object.filter(comps, comp => comp > 75);
    p17.innerHTML = Object.getOwnPropertyNames(compsFiltered);
}


// Exercise 18

let personA = {name: "Snus", Age: 20};
let treat = {name: "Ostbågar", Gott: true};

function exercise181(){
    p18.innerHTML = "Properties of personA: " + Object.getOwnPropertyNames(personA) + ", properties of treat: "
    + Object.getOwnPropertyNames(treat);
}

function exercise182(){
    let objMerged = Object.assign(personA, treat);
    p18.innerHTML = "Properties of merged objects objMerged: " + Object.getOwnPropertyNames(objMerged);
}