import Paleta from "../models/Paleta.js";
import { bst } from "./dependencies.js";

let agregar = document.getElementById("add-btn");
let buscar = document.getElementById("search-btn");
let minimo = document.getElementById("min-btn");
let maximo = document.getElementById("max-btn");
let imprimir = document.getElementById("impresion-btn");

agregar.addEventListener("click", () => {
    let sabor = document.getElementById("sabor").value;
    let precio = parseFloat(document.getElementById("precio").value);
    let tamaño = document.getElementById("tamaño").value;
    
    let paleta = new Paleta(sabor, precio, tamaño);
    let data = bst.add(paleta);
    console.log(data);
    if (data) {
        Swal.fire("Registro exitoso");
    } else {
        Swal.fire("No se pudo realizar el registro");
    }
});

buscar.addEventListener("click", () => {
    let searchSabor = document.getElementById("search").value;
    if (bst.search(searchSabor)) {
        Swal.fire("La paleta se encuentra en la lista");
    } else {
        Swal.fire("La paleta no se encuentra en la lista");
    }
});

minimo.addEventListener("click", () => {
    let data = bst.min();
    if (data) {
        Swal.fire(`La paleta con menor letra es: ${data.sabor}`);
    } else {
        Swal.fire("No hay paletas en la lista");
    }
});

maximo.addEventListener("click", () => {
    let data = bst.max();
    if (data) {
        Swal.fire(`La paleta con mayor letra es: ${data.sabor}`);
    } else {
        Swal.fire("No hay paletas en la lista");
    }
});

imprimir.addEventListener("click", () => {
    let paletas = document.getElementById("div");
    paletas.innerHTML = "";
    bst.imprimir((data) => {
        let paletasItem = document.createElement("div");
        paletasItem.textContent = `Sabor: ${data.sabor}, Precio: ${data.precio}, Tamaño: ${data.tamaño}`;
        paletas.appendChild(paletasItem);
    });
});
