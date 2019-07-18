// string var
let name = "Dalton Ward";

// const int var
const numStates = 50;

// int var
let sum = 5 + 4;

function sayHello() {
    alert("hello world");
}

sayHello();

function checkAge(name, age) {
    if (age < 21) {
        alert("Sorry " + name + ", you aren't old enough to view this page!");
    } 
}

checkAge("Charles", 21);
checkAge("Abby", 27);
checkAge("James", 18);
checkAge("John", 17);

let vegetables = ["Tomatoes", "Lettuce", "Squash"];

for (let v of vegetables) {
    console.log(v);
}

let peopleArray = [
    p1 = {
        name: "Matt",
        age: 15
    },
    p2 = {
        name: "Max",
        age: 35
    }, 
    p3 = {
        name: "Sally",
        age: 44
    }, 
    p4 = {
        name: "Toast",
        age: 24
    },
    p5 = {
        name: "Bekah",
        age: 18
    }
];

for (let p of peopleArray) {
    checkAge(p.name, p.age);
}

function getLength(msg) {
    console.log(msg.length);
    return msg.length;
}

let msgL = getLength("Hello World");

if (msgL % 2 == 0) {
    console.log("The world is nice and even!");
} else {
    console.log("The world is an odd place!");
}

