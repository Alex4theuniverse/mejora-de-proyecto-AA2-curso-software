const username = document.getElementById('username')
const password = document.getElementById('password')
const button = document.getElementById('button')

button.addEventListener('click', (element) => {
    element.preventDefault()
    const data = {
        username: username.value,
        password: password.value
    }

    console.log(data)

    const nuevaPagina = '../usuario/usuario.html';

    window.location.href = nuevaPagina;
});