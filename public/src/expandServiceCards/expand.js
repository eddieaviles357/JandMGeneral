let card1 = document.getElementsByClassName("card__details--1");
let card2 = document.getElementsByClassName("card__details--2");
let card3 = document.getElementsByClassName("card__details--3");

let buttonExpand1 = document.getElementById("expandBtn--1");
let buttonExpand2 = document.getElementById("expandBtn--2");
let buttonExpand3 = document.getElementById("expandBtn--3");

let toggleExpand1 = (_) => {
  card1[0].classList.toggle("expand--1");
}

let toggleExpand2 = (_) => {
  card2[0].classList.toggle("expand--2");
}

let toggleExpand3 = (_) => {
  card3[0].classList.toggle("expand--3");
}

buttonExpand1.addEventListener("click", toggleExpand1);
buttonExpand2.addEventListener("click", toggleExpand2);
buttonExpand3.addEventListener("click", toggleExpand3);
