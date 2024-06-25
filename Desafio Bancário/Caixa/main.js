const saldoTotal = 850

let valor = document.getElementById('saque')
let resto = Number(valor)
let btn = document.getElementById('btn')

let cedulaFish = document.getElementById('cedulaFish')
let cedulaTiger = document.getElementById('cedulaTiger')

let notasCem = 30
let notasCinquenta = 500

cedulaFish.textContent = notasCem
cedulaTiger.textContent = notasCinquenta

while (resto >= cedulaFish) {
    cedulaFish.textContent = resto
    resto = resto - cedulaFish
}

while (resto >= cedulaTiger) {
    cedulaTiger.textContent = resto
    resto = resto - cedulaTiger
}

btn.addEventListener('click', (event) => {
    event.preventDefault()
    
    if (saldoTotal > valor) {   
        alert("Saldo infuficente, seu saldo atual é de: " + saldoTotal)
    }
    else { 
        alert("Saque autorizado !")
    }
})


