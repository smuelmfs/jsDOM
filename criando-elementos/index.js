let contador = 1

function addInput(){
    const ul = document.getElementById('inputs')

    const newLi = document.createElement('li')
    newLi.innerText = 'novo input ' + contador

    const newInput = document.createElement('input')
    newInput.type = 'text'
    newInput.name = 'input'

    newLi.appendChild(newInput)
    ul.appendChild(newLi)

    contador ++
}