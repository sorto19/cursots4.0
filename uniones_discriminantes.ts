type OperacionSuma = {
 sumando1 :number ,
 sumando2 : number,
 tipo:'suma'
}
type OperacionMultiplicar = {
  operador1 :number,
  operador2 :number,
  tipo: 'multiplicacion'
}
//esta es una union descriminante
type Operacion = OperacionSuma | OperacionMultiplicar

function operar( o: Operacion) {
  if(o.tipo == 'suma') {
    return o.sumando1 + o.sumando2
  }else if (o.tipo == 'multiplicar') {
     return o.operador1 * o.operador2
  }

}