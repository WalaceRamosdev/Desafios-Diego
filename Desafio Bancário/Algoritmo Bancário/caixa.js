const saque = document.getElementById('valorSaque')
const btn = document.getElementById('sacarValor')

btn.addEventListener('click', (event) => {
    event.preventDefault()

    const value = Number(saque.value)

    if (value =="" || isNaN(value)) {
        alert('Informe apenas números')
        return
    }

    const notasCem = value / 100
    console.log (notasCem)

})