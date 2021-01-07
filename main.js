//alert('Siema, nazywam się Łukasz i witam Cię w moim pierdolniczku XD')
//wyjebałem bo wkurwiało

console.log(`Siema, nazywam się Łukasz i witam Cię w moim pierdolniczku XD`);

const firstName = "Łukasz";
const age = 28;

console.log(firstName);
console.log(age);
console.log(`Siema, nazywam się ${firstName} i mam ${age} lat.`);

const heading = document.querySelector(".dom-test--js");

console.log(heading);

function calculate(myNumber) {
  return myNumber * 7;
}

const myResult = calculate(1);

console.log(myResult);

function createContent(querySelectorContent, content) {
  const element = document.querySelector(querySelectorContent);
  element.innerHTML = content;
}

createContent(".about__heading--js", "siema siema"); /* funkcja zmienia content w podanym selektorze */

function helloWorld() {
  console.log("witaj świecie");
}
helloWorld();

/*const helloWorld = () => { //fat arrow function
    console.log('witaj świecie')
}
helloWorld();*/

const deathStar = {
  diameter: 120000,
  fire: (target) => {
    console.log(`${target} destroyed`);
  },
  isOperating: true,
  name: "Death Star",
  levels: 357,
  population: 10000,
  isLightOn: true,
  commander: {
    name: "Darth Vader",
    age: 44,
  },
};

console.log(deathStar);

deathStar.fire("brain");

console.log(deathStar.name); //wypisuje tylko nazwę obiektu

console.log(deathStar["name"]); //nazwe własności podajemy jako string
