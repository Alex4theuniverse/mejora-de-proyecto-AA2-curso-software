import { serviciosDeLaList, LUNES, MARTES, MIERCOLES, JUEVES, VIERNES, OFERTAS2X1, OFERTAS, redes, contact, reclamo } from "./data.js";

const serviciosLista = document.getElementById("serviciosLista");
const lunes = document.getElementById("LUNES");
const martes = document.getElementById("MARTES");
const miercoles = document.getElementById("MIERCOLES");
const jueves = document.getElementById("JUEVES");
const viernes = document.getElementById("VIERNES");
const ofertas2x1 = document.getElementById("OFERTAS2x1");
const ofertas = document.getElementById("OFERTAS");
const Redes = document.getElementById('redes');
const contacto = document.getElementById('contact');
const Reclamo = document.getElementById('reclamo');

serviciosDeLaList.forEach((element) => {
    const { id, href, title, content } = element;
    serviciosLista.innerHTML += `
    <li key="${id}">
        <a 
            href=${href}
            rel="noopener noreferrer" 
            class="link"
            title="${title}"
            >
            <b> ${content}</b>
        </a>
    </li>
    `;
});

LUNES.forEach((element) => {
    const {id, image, title, priceNulo, price } = element;
    lunes.innerHTML += `
    <li class="producto"
        key="${id}">
        <img src=${image}
        alt="${title}" 
        class="imagen-producto">
        <br />
        <p>${title}</p>
        <del>
            <p>${priceNulo}</p>
        </del>
        <p>${price}</p>
    </li>
    `
});

MARTES.forEach((element) => {
    const {id, image, title, priceNulo, price } = element;
    martes.innerHTML += `
    <li class="producto"
        key="${id}">
        <img src=${image}
        alt="${title}" 
        class="imagen-producto">
        <br />
        <p>${title}</p>
        <del>
            <p>${priceNulo}</p>
        </del>
        <p>${price}</p>
    </li>
    `
});

MIERCOLES.forEach((element) => {
    const {id, image, title, priceNulo, price } = element;
    miercoles.innerHTML += `
    <li class="producto"
        key="${id}">
        <img src=${image}
        alt="${title}" 
        class="imagen-producto">
        <br />
        <p>${title}</p>
        <del>
            <p>${priceNulo}</p>
        </del>
        <p>${price}</p>
    </li>
    `
});

JUEVES.forEach((element) => {
    const {id, image, title, priceNulo, price } = element;
    jueves.innerHTML += `
    <li class="producto"
        key="${id}">
        <img src=${image}
        alt="${title}" 
        class="imagen-producto">
        <br />
        <p>${title}</p>
        <del>
            <p>${priceNulo}</p>
        </del>
        <p>${price}</p>
    </li>
    `
});

VIERNES.forEach((element) => {
    const {id, image, title, priceNulo, price } = element;
    viernes.innerHTML += `
    <li class="producto"
        key="${id}">
        <img src=${image}
        alt="${title}" 
        class="imagen-producto">
        <br />
        <p>${title}</p>
        <del>
            <p>${priceNulo}</p>
        </del>
        <p>${price}</p>
    </li>
    `
});

OFERTAS2X1.forEach((element) => {
    const {id, image, title, priceNulo, price } = element;
    ofertas2x1.innerHTML += `
    <li class="producto"
        key="${id}">
        <img src=${image}
        alt="${title}" 
        class="imagen-producto">
        <br />
        <p>${title}</p>
        <del>
            <p>${priceNulo}</p>
        </del>
        <p>${price}</p>
    </li>
    `
});

OFERTAS.forEach((element) => {
    const {id, image, title, priceNulo, price } = element;
    ofertas.innerHTML += `
    <li class="producto"
        key="${id}">
        <img src=${image}
        alt="${title}" 
        class="imagen-producto">
        <br />
        <p>${title}</p>
        <del>
            <p>${priceNulo}</p>
        </del>
        <p>${price}</p>
    </li>
    <section class="seccion-productos">
    `
});

redes.forEach((element) =>{
    const {id, href, title,content} = element;
    Redes.innerHTML += `
    <li key=${id}>
        <a href="${href}" 
        target="_blank" 
        rel="noopener noreferrer" 
        class="link">
        ${title}
        ${content}
        </a>
    </li>       
    `;
});

contact.forEach((element) => {
    const {id,href,title,content} = element;
    contacto.innerHTML += `
        <li key=${id}>
            <a href="${href}" 
            target="_blank" 
            rel="noopener noreferrer" 
            class="link">
            ${title}
            ${content}
            </a>    
        </li>
    `;
});

reclamo.forEach((element) =>{
    const {id,href,title,content} = element;
    Reclamo.innerHTML += `
        <li key=${id}>
            <a href="${href}" 
            target="_blank" 
            rel="noopener noreferrer" 
            class="link">
            ${title}
            ${content}
            </a>    
        </li>       
    `;
});





