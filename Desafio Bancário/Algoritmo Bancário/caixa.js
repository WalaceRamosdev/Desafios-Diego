const saldoTotal = Math.floor(Math.random() * 2000)

const saque = document.getElementById('valorSaque')
const btn = document.getElementById('sacarValor')
const btnSaldo = document.getElementById('consultarSaldo')

let cedulasCem = document.getElementById('cedulasCem')
let cedulasCinquenta = document.getElementById('cedulasCinquenta')
let cedulasVinte = document.getElementById('cedulasVinte')
let cedulasDez = document.getElementById('cedulasDez')
let cedulasCinco = document.getElementById('cedulasCinco')
let cedulasDois = document.getElementById('cedulasDois')
let cedulasUm = document.getElementById('cedulasUm')

let cedulaFish = document.getElementById('cedulaFish')
let cedulaTiger = document.getElementById('cedulaTiger')
let cedulaMonkey = document.getElementById('cedulaMonkey')
let cedulaBird = document.getElementById('cedulaBird')
let cedulaHeron = document.getElementById('cedulaHeron')
let cedulaTurtle = document.getElementById('cedulaTurtle')
let cedulaLitleBird = document.getElementById('cedulaLitleBird')

cedulaFish = Math.floor(Math.random() * 60)
cedulaTiger = Math.floor(Math.random() * 60)
cedulaMonkey = Math.floor(Math.random() * 60)
cedulaBird = Math.floor(Math.random() * 60)
cedulaHeron = Math.floor(Math.random() * 60)
cedulaTurtle = Math.floor(Math.random() * 60)
cedulaLitleBird = Math.floor(Math.random() * 60)

cedulasCem.textContent = "R$ 100 = " + cedulaFish
cedulasCinquenta.textContent ="R$ 50 = " +  cedulaTiger
cedulasVinte.textContent ="R$ 20 = " +  cedulaMonkey
cedulasDez.textContent ="R$ 10 = " +  cedulaBird
cedulasCinco.textContent ="R$ 5 = " +  cedulaHeron
cedulasDois.textContent ="R$ 2 = " +  cedulaTurtle
cedulasUm.textContent ="R$ 1 = " +  cedulaLitleBird

const saqueAutorizado = "Saque realizado com sucesso !"
const saqueNegado = "Saldo indisponivel ! Seu saldo é de: R$ " + saldoTotal

btnSaldo.addEventListener('click', (event) => {
    event.preventDefault()
    alert("Seu saldo é de: R$ " + saldoTotal)
    
})

btn.addEventListener('click', (event) => {
    event.preventDefault()    

    const value = Number(saque.value)

    if ( value =="" || isNaN (value) ) {
        alert('Informe apenas números')
        return
    }

    if (value <= saldoTotal) {
        alert(saqueAutorizado + " Seu saldo atual é de: R$ " +  (saldoTotal - value) + " Reais")
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
            cedulasCem.textContent =  "R$ 100 = " + (cedulaFish - notasCem)
        }
        

        if (notasCinquenta > 0) {
            cedulasCinquenta.textContent = "R$ 50 = " + (cedulaTiger - notasCem)
        }
        
        if (notasVinte > 0) {
            cedulasVinte.textContent = "R$ 20 = " + (cedulaMonkey - notasCem)
        }
        
        if (notasDez > 0) {
            cedulasDez.textContent = "R$ 10 = " + (cedulaBird - notasCem)
        }
        

        if (notasCinco > 0) {
            cedulasCinco.textContent = "R$ 5 = " + (cedulaHeron - notasCem)
        }
        

        if (notasDois > 0) {
            cedulasDois.textContent = "R$ 2 = " + (cedulaTurtle - notasCem)
        }
        

        if (notasUm > 0) {
            cedulasUm.textContent = "R$ 1 = " + (cedulaLitleBird - notasCem)
        }
        

}) 

    