
const inputFullName = document.getElementById('fullname')

function technologies(ev) {
    ev.preventDefault()

    const form = document.getElementById('devForm')
    const div = document.createElement('div')

    const techNameLabel = document.createElement('label')
    techNameLabel.innerText = 'Nome da Tecnologia: '

    const techInput = document.createElement('input')
    techInput.type = 'text'
    techInput.name = 'techInput'
    techInput.id = 'techInput'

    const radioLabel = document.createElement('label')
    radioLabel.innerText = 'Anos de Experiência: '

    let options = ['0-2 anos', '3-4 anos', '5+ anos']
    let radioOptions = []

    options.forEach((option, i) => {
        radioBtn = document.createElement('input')
        radioBtn.type = 'radio'
        radioBtn.name = 'option'
        radioBtn.value = option
        radioLabel.id = `option${i + 1}`

        const radioOpt = document.createElement('label')
        radioOpt.innerText = `${option}`
        radioOpt.htmlFor = `option${i + 1}`

        radioOptions.push(radioBtn, radioOpt)
    });

    const deleteBtn = document.createElement('button')
    deleteBtn.type = 'button'
    deleteBtn.id = 'deleteBtn'
    deleteBtn.innerText = 'Deletar Tecnologia'

    deleteBtn.addEventListener('click', () => {
        div.remove()
    })

    form.appendChild(div)
    div.append(techNameLabel, techInput, radioLabel, ...radioOptions, deleteBtn)

}

const form = document.getElementById('devForm')
form.addEventListener('submit', (ev) => {
    ev.preventDefault()

    const name = document.getElementById('fullname').value
    const techName = document.getElementById('techInput').value
    const experience = document.querySelector('input[name = "option"]:checked')
    if (experience) {
        const expValue = experience.value;
        console.log('Opção selecionada:', expValue);
    } else {
        console.log('Nenhuma opção selecionada');
    }

    console.log({name, techName, experience})

    form.reset()
})

document.getElementById('addTechBtn').addEventListener('click', technologies)
