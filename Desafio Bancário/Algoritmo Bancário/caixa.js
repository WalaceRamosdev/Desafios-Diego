

const saldoTotal = Math.floor(Math.random() * 2000 )

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


cedulasCem.textContent = "R$ 100 = " + 30//+ cedulaFish
cedulasCinquenta.textContent ="R$ 50 = " + 500 // + cedulaTiger
cedulasVinte.textContent ="R$ 20 = " + 45//+ cedulaMonkey
cedulasDez.textContent ="R$ 10 = " + 90// +  cedulaBird
cedulasCinco.textContent ="R$ 5 = " + 105// + cedulaHeron
cedulasDois.textContent ="R$ 2 = " + 200//+  cedulaTurtle
cedulasUm.textContent ="R$ 1 = " + 4// +  cedulaLitleBird

const saqueAutorizado = "Saque realizado com sucesso !"
const saqueNegado = "Saldo insuficiente ! Consulte seu saldo e tente novamente."

btnSaldo.addEventListener('click', (event) => {
    event.preventDefault()
    alert("Seu saldo é de: R$ " + saldoTotal)
    
})

btn.addEventListener('click', (event) => {
    event.preventDefault()    

    const value = Number(saque.value)


    if ( value == 0 || isNaN (value) ) {
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


    
    let notasCem = Math.floor(value / 100)
    let resto = value % 100


    let notasCinquenta = Math.floor(resto / 50)
        resto = resto % 50

        

    let notasVinte = Math.floor(resto / 20)
        resto = resto % 20

    let notasDez = Math.floor(resto / 10)
        resto = resto % 10

    let notasCinco = Math.floor(resto / 5)
        resto = resto % 5

    let notasDois = Math.floor(resto / 2)
        resto = resto % 2

    let notasUm = Math.floor(resto / 1)


    if (notasCem > 0) {
        cedulasCem.textContent = `R$ 100 =  ${30 - notasCem} ▼ `

    }

    if (notasCinquenta > 0) {
        cedulasCinquenta.textContent = `R$ 50 = ${500 - notasCinquenta} ▼ `
        
    }

    if (notasVinte > 0) {
        cedulasVinte.textContent = `R$ 20 = ${45 - notasVinte} ▼ `
        
    }

    if (notasDez > 0) {
        cedulasDez.textContent = `R$ 10 = ${90 - notasDez} ▼ `
        
    }

    if (notasCinco > 0) {
        cedulasCinco.textContent = `R$ 5 = ${105 - notasCinco} ▼ `
        
    }
    
    if (notasDois > 0) {
        cedulasDois.textContent = `R$ 2 = ${200 - notasDois} ▼ `
        
    }

    if (notasUm > 0) {
        cedulasUm.textContent = `R$ 1 = ${4 - notasUm} ▼ `
        
    }

})  