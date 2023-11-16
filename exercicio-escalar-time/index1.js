function addPlayer() {
    const position = document.getElementById('position').value
    const name = document.getElementById('name').value
    const number = document.getElementById('number').value

    const confirmation = confirm(`Deseja escalar o jogador ${name} camisa número ${number} na posição ${position}?`)

    if (confirmation) {
        const ul = document.getElementById('team-list')
        const newli = document.createElement('li')

        newli.id = `Jogador ${number}`
        newli.innerText = `${name}, ${position} camisa ${number}`

        ul.appendChild(newli)

        //esvaziar os campos
        document.getElementById('position').value
        document.getElementById('name').value
        document.getElementById('number').value
    } else {
        alert('Ação cancelada')
    }
}

function removePlayer() {
    const numberToRemove = document.getElementById('numberToRemove').value
    const playerRemove = document.getElementById(`Jogador ${numberToRemove}`)

    confirmation = confirm(`Deseja remover o ${playerRemove.innerText}?`)

    if (confirmation) {
        document.getElementById('team-list').removeChild(playerRemove)
        document.getElementById('numberToRemove').value = ''
    }else{
        alert('Ação cancelada')
    }
}