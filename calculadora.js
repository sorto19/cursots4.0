//[datos] -->sumar-->[datos]
function sumar(m, n) {
    var suma = m + n;
    console.log(m + " +" + n + " = " + suma);
    return suma;
}
//funcion callback
var restar = function (m, n) {
    var resta = m - n;
    console.log(m + " - " + n + " = " + resta);
    return resta;
};
//funcion callback
var multiplicar;
multiplicar = function (a, b, callback) { return callback(a * b); };
multiplicar(4, 5, function (result) {
    console.log("Resultado: " + result);
});
