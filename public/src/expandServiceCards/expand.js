let card1 = document.querySelector(".card__details--1");
let card2 = document.querySelector(".card__details--2");
let card3 = document.querySelector(".card__details--3");

let buttonExpand1 = document.getElementById("expandBtn--1");
let buttonExpand2 = document.getElementById("expandBtn--2");
let buttonExpand3 = document.getElementById("expandBtn--3");

let toggleExpand1 = (_) => {
  card1.classList.toggle("expand--1");
  (card1.classList.length === 3) ? buttonExpand1.innerHTML = "-" : buttonExpand1.innerHTML = "+";
}

let toggleExpand2 = (_) => {
  card2.classList.toggle("expand--2");
  (card2.classList.length === 3) ? buttonExpand2.innerHTML = "-" : buttonExpand2.innerHTML = "+";
}

let toggleExpand3 = (_) => {
  card3.classList.toggle("expand--3");
  (card3.classList.length === 3) ? buttonExpand3.innerHTML = "-" : buttonExpand3.innerHTML = "+";
}

buttonExpand1.addEventListener("click", toggleExpand1);
buttonExpand2.addEventListener("click", toggleExpand2);
buttonExpand3.addEventListener("click", toggleExpand3);
