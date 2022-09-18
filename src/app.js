/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let cardSuits = ["♦", "♥", "♠", "♣"];
let numeros = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];

window.onload = function() {
  //write your code here
  let card = document.querySelector(".num");
  let suits = document.querySelectorAll(".suit");
  let indexNum = Math.floor(Math.random() * numeros.length);
  let indexSuit = Math.floor(Math.random() * cardSuits.length);
  console.log(indexSuit);

  if (indexSuit <= 1) {
    card.style.color = "red";
    suits.forEach(element => (element.style.color = "red"));
  } else {
    card.style.color = "black";
    suits.forEach(element => (element.style.color = "black"));
  }

  card.innerHTML = numeros[indexNum];
  suits.forEach(element => (element.innerHTML = cardSuits[indexSuit]));
};
