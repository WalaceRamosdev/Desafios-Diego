const saldoTotal = 2000

const saque = document.getElementById('valorSaque')
const btn = document.getElementById('sacarValor')

const cedulasCem = document.getElementById('cedulasCem')
const cedulasCinquenta = document.getElementById('cedulasCinquenta')
const cedulasVinte = document.getElementById('cedulasVinte')
const cedulasDez = document.getElementById('cedulasDez')
const cedulasCinco = document.getElementById('cedulasCinco')
const cedulasDois = document.getElementById('cedulasDois')
const cedulasUm = document.getElementById('cedulasUm')

const saqueAutorizado = "Saque realizado com sucesso!"
const saqueNegado = "Saldo indisponivel"

btn.addEventListener('click', (event) => {
    event.preventDefault()

    cedulasCem.textContent = ""
    cedulasCinquenta.textContent = ""
    cedulasVinte.textContent = ""
    cedulasDez.textContent = ""
    cedulasCinco.textContent = ""
    cedulasDois.textContent = ""
    cedulasUm.textContent = ""
    

    const value = Number(saque.value)

    if ( value =="" || isNaN (value) ) {
        alert('Informe apenas números')
        return
    }

    if (value < saldoTotal) {
        alert(saqueAutorizado)
    }
    else {
        alert(saqueNegado)
        return
    }

    const notasCem = parseInt(value / 100)
    let resto = value % 100

    const notasCinquenta = parseInt(resto / 50)
        resto = resto % 50

    const notasVinte = parseInt(resto / 20)
        resto = resto % 20

    const notasDez = parseInt(resto / 10)
        resto = resto % 10

    const notasCinco = parseInt(resto / 5)
        resto = resto % 5

    const notasDois = parseInt(resto / 2)
        resto = resto % 2

    const notasUm = parseInt(resto / 1)
        resto = resto % 1

        //\\
        
        if (notasCem > 0) {
            cedulasCem.textContent = "Notas de R$ 100 = " + notasCem
        }

        if (notasCinquenta > 0) {
            cedulasCinquenta.textContent = "Notas de R$ 50 = " + notasCinquenta
        }

        if (notasVinte > 0) {
            cedulasVinte.textContent = "Notas de R$ 20 = " + notasVinte
        }

        if (notasDez > 0) {
            cedulasDez.textContent = "Notas de R$ 10 = " + notasDez
        }

        if (notasCinco > 0) {
            cedulasCinco.textContent = "Notas de R$ 5 = " + notasCinco
        }

        if (notasDois > 0) {
            cedulasDois.textContent = "Notas de R$ 2 = " + notasDois
        }

        if (notasUm > 0) {
            cedulasUm.textContent = "Notas de R$ 1 = " + notasUm
        }

}) 

    