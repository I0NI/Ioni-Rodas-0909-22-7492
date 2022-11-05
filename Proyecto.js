function algoritmo() {
let ahorroTotal = 0;
let mes = 1;
while (mes <= 12) {
    let ahorroMes = +prompt("Ingresa la cantidad a ahorrar");
    ahorroTotal += ahorroMes;
    console.log(`El ahorro del mes ${mes} es : ${ahorroMes}`);
    m++;
}
console.log(`El ahorro final es : ${ahorroTotal}`); }