import { serviciosDeLaList, topsdeldia, abarrotes, bebidas, cuidado, frescos, redes, contact, reclamo } from "./js/util/data.js";

const serviciosLista = document.getElementById("serviciosLista");
const tops = document.getElementById("topsdeldia");
const aba = document.getElementById("abarrotes");
const drink = document.getElementById('bebidas');
const cuidadoPersonal = document.getElementById('cuidado');
const fresh = document.getElementById('frescos');
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

topsdeldia.forEach((element) => {
    const { id, image, title, price } = element;
    tops.innerHTML += `
        <li class="producto"
            key=${id}>
            <img src=${image} 
            alt="${title}"
            class="imagen-producto" width="256" height="256"/>
            <br />
            <p>${title}</p>
            <p>${price}</p>
            </li>
    `;
});

abarrotes.forEach((element) => {
    const { id, image, title, price } = element;
    aba.innerHTML += `
        <li class="producto"
            key=${id}>
            <img src=${image} 
            alt="${title}"
            class="imagen-producto" >
            <br />
            <p>${title}</p>
            <p>${price}</p>
        </li>
    `;
});

bebidas.forEach((element) => {
    const { id, image, title, price } = element;
    drink.innerHTML += `
    <li class="producto"
        key=${id}>
        <img src=${image} 
        alt="${title}"
        class="imagen-producto" >
        <br />
        <p>${title}</p>
        <p>${price}</p>
    </li>   
    `;
});

cuidado.forEach((element) => {
    const {id,image,title,price} = element;
    cuidadoPersonal.innerHTML += `
    <li class="producto"
            key=${id}>
            <img src=${image}
            alt="${title}" 
            class="imagen-producto">
            <br />
            <p>${title}</p>
            <p>${price}</p>
    </li> 
    `;
});

frescos.forEach((element) => {
    const {id,image,title,price} = element;
    fresh.innerHTML += `
    <li class="producto"
        key=${id}>
        <img src=${image}
        alt="${title}" 
        class="imagen-producto">
        <br />
        <p>${title}</p>
        <p>${price}</p>
    </li> 
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