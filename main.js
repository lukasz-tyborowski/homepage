//alert('Siema, nazywam się Łukasz i witam Cię w moim pierdolniczku XD')
//wyjebałem bo wkurwiało

console.log(`Siema, nazywam się Łukasz i witam Cię w moim pierdolniczku XD`);

const firstName = "Łukasz";
const age = 28;

function calculate(myNumber) {
  return myNumber * 7;
}

const myResult = calculate(1);

console.log(myResult);

function createContent(querySelectorContent, content) {
  const element = document.querySelector(querySelectorContent);
  element.innerHTML = content;
}

createContent(
  ".about__heading--js",
  "siema siema"
); /* funkcja zmienia content w podanym selektorze */

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

if ("Javascript" != "Java") {
  console.log("Java to nie Javascript");
  //wykonuje kod jeśli true
}

if (!("Javascript" == "Java")) {
  console.log("Java to nie Javascript");
  //wykonuje kod jeśli true
}

if (35 === "35" || 35 === 35) {
  console.log("nie wszystko jest w porządku"); //wykonuje kod, gdy przynajmniej jeden z warunków jest spełniony
}

if (50 > 40) {
  console.log("zgadza się"); //wykonaj kod jeśli true
} else {
  console.log("nie zgadza się"); //wykonaj kod jeśli false
}

/*if (myVariable == 4) {
  //wykonaj kod jeśli true
} else if (myVariable == 8) {
  //wykonaj kod jeśli myVariable == 8
} else if (myVariable == 16) {
  //wykonaj kod jeśli myVariable == 16
} else {
  //każdy inny przypadek nie wykonuje kodu
}
*/
const myVariable = 9;

switch (
  myVariable //zmienną wrzucamy jako parametr
) {
  case 4:
    console.log("hi 4");
    break;
  case 8:
    console.log("hi 8");
    break;
  default:
    console.log("default response"); //ten kod się wykona, kiedy nie trafi na dwa poprzednie przypadki
}

//zapis skrócony
32 < 20 ? console.log("to prawda") : console.log("to nie prawda");

if (32 > 20) {
  console.log("to prawda");
} else {
  console.log("to nie prawda");
}

const result = 32 < 20 ? true : false;
console.log(result); //wywołanie zmiennej
//aby użyć linijkę kodu tj. w zapisie skróconym, potrzebny jest return

//

const button = document.querySelector(".action--js");




button.addEventListener("click" , () => {
  const heading = document.querySelector(".main__heading--js");
  heading.innerHTML = "Witaj Drogi Odwiedzający, nazywam się Bill Hicks";
});
