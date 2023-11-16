const form = document.getElementById('orderForm')

form.addEventListener('submit', (ev) => {
    ev.preventDefault()

    const name = document.querySelector('input[name = "name"]').value
    const address = document.querySelector('input[name = "address"]').value
    const breadType = document.querySelector('select[name = "breadType"]').value
    const main = document.querySelector('input[name = "main"]').value
    let salad = ''
    document.querySelectorAll('input[name="salad"]:checked').forEach((saladItem) => { salad += ` - ${saladItem.value}` }) //pegando cada item que foi marcardo na lista e para cada item, ele vai ser armazenado na variavel vazia 'salad'
    const observations = document.querySelector('textarea').value //unica textarea do codigo, então não precisa especificar como os outros valores acima. ex(textarea[name = "observations"])

    console.log({name,
        address,
        breadType,
        main,
        salad,
        observations})
})