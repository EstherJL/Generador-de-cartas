import "bootstrap";
import "./style.css";
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
//import { doc } from "prettier";
window.onload = function() {
  //write your code here
  //let palos = [":diamantes:", ":corazones:", ":picas:", ":tréboles:"];
  let numeros = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  let numero = numeros[Math.floor(Math.random() * (13 - 0) + 0)];
  var palos = [
    { s: "♦", color: "red" },
    { s: "♥", color: "red" },
    { s: "♠", color: "black" },
    { s: "♣", color: "black" }
  ];
  let palo = palos[Math.floor(Math.random() * (4 - 0) + 0)];

  let top = document.querySelector(".top");
  let bottom = document.querySelector(".bottom");

  //asignamos el palos y estilo a top
  top.innerHTML = palo.s;
  top.style.color = palo.color;

  // asignamos el palos y estilo a bottom
  bottom.innerHTML = palo.s;
  bottom.style.color = palo.color;

  // asignamos el color y estilo a numero

  document.querySelector(".numero").innerHTML = numero;
  document.querySelector(".numero").style.color = palo.color;
};
