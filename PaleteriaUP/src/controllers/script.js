import Paleta from "../models/Paleta.js";
import { bst } from "./dependencies.js";

let btn = document.getElementById("add-btn");
let btn2 = document.getElementById("search-btn");
let btn3 = document.getElementById("min-btn");
let btn4 = document.getElementById("max-btn");
let btn5 = document.getElementById("impresion-btn");

btn.addEventListener("click", () => {
    let addPaleta = document.getElementById("add").value;
    let paleta = new Paleta(addPaleta);
    let data = bst.add(paleta);
    console.log(data);
    if (data) {
        Swal.fire("Registro exitoso");
    } else {
        Swal.fire("No se pudo realizar el registro");
    }
});

btn2.addEventListener("click", () => {
    let searchPaleta = document.getElementById("search").value;
    if (bst.search(searchPaleta)) {
        Swal.fire("La paleta se encuentra en la lista");
    } else {
        Swal.fire("La paleta no se encuentra en la lista");
    }
});

btn3.addEventListener("click", () => {
    let data = bst.min();
    if (data) {
        Swal.fire(`La paleta con menor letra es:  ${data.add}`);
    } else {
        Swal.fire("No hay paletas en la lista");
    }
});

btn4.addEventListener("click", () => {
    let data = bst.max();
    if (data) {
        Swal.fire(`La paleta con mayor letra es: ${data.add}`);
    } else {
        Swal.fire("No hay paletas en la lista");
    }
});

btn5.addEventListener("click", () => {
    let players = document.getElementById("div");
    players.innerHTML = "";
         bst.impresion((data) => {
        let playerItem = document.createElement("div");
        playerItem.textContent = `${data.add}`;
        players.appendChild(playerItem);
    });
})