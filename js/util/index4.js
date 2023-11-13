import { serviciosDeLaList, RAPICOMPRA, redes, contact, reclamo,  } from "./data.js";

const serviciosLista = document.getElementById("serviciosLista");
const rapicompra = document.getElementById('RAPICOMPRA')
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


RAPICOMPRA.forEach((element) => {
    const { id, image, title, price } = element;
    rapicompra.innerHTML += `
    <li class="producto" 
        key="${id}">
        <img src="${image}"
        alt="${title}"
        class="imagen-producto">
        <br />
        <p>${title}</p>
        <p>${price}</p>
    </li>
    <section class="seccion-productos">
    `;
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