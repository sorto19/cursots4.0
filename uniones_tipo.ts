type A = {
   uno: boolean;
   dos: boolean;
}
type B = {
     tres: boolean;
}
function convertir (valor: string | number) {
 if(typeof(valor) === "string") {
    valor.trim()
 }else if (typeof(valor) === "number") {
    valor.toFixed()
 }else {
     valor.
 }
}
convertir("asd")
convertir(5)
convertir(false)