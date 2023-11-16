function register(ev) {
    const username = ev.currentTarget.parentNode.children.username.value
    const passwordConfirmation = ev.currentTarget.parentNode.children.passwordConfirmation.value

    if (password === passwordConfirmation) {
        alert(`Usuário ${username} criado com sucesso`)
    } else {
        alert('Algo deu errado')
    }
    document.getElementById('username').value = ''
    document.getElementById('password').value = ''
    document.getElementById('passwordConfirmation').value = ''
}

const button = document.getElementById('register-button')

button.addEventListener('click', register)

function removeEvent() {
    button.removeEventListener('click', register)
    alert('Evento removido')

    document.getElementById('username').value = ''
    document.getElementById('password').value = ''
    document.getElementById('passwordConfirmation').value = ''
}

button.addEventListener('mouseover', (ev) =>{
    console.log(ev.currentTarget)
})