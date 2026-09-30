// EX 1
function numeroDobro(numeroDobro, multiplicador1){
    return (numeroDobro * 2)
}
console.log(numeroDobro(10))
console.log()

// ----------------------------------------------------
// EX 2
function numeroTriplo(numeroTriplo, multiplicador2){
    return (numeroTriplo * 3)
}
console.log(numeroTriplo(10))
console.log()
// ----------------------------------------------------
// EX 3
function soma(numero1, numero2){
    return (numero1 + numero2)
}
console.log(soma(3,3))
console.log()
// ----------------------------------------------------
// EX 4
function multiplicacao(mult1, mult2){
    return (mult1 * mult2)
}
console.log(multiplicacao(2,4))
console.log()
// ----------------------------------------------------
// EX 5
function aumento(salario, bonus){
    return (salario + (salario * 0.10))
}
console.log(aumento(1000))
console.log()
// ----------------------------------------------------
// EX 6
function imprimirNumeros() {
    for (let i = 1; i <= 10; i++) {
        console.log(i);
    }
}

imprimirNumeros();
console.log()
// ----------------------------------------------------
//EX 7
function somarAteDez() {
    let soma = 0;
    for (let i = 1; i <= 10; i++) {
        soma += i; 
    }
    return soma;
}
console.log(somarAteDez());
