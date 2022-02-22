function iniciar() {
    let numero = Number.parseInt(window.prompt('Digite um numero'))
    let menor = numero--
    let maior = numero++
    window.alert(`Antes de ${menor} temos o número ${numero} e Depois de ${menor} temos o numero ${maior}`)  
}