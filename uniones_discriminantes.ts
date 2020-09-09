type OperacionSuma = {
 sumando1 :number ,
 sumando2 : number,
 tipo:'suma'
}
type OperacionMultiplicar = {
  operandor1 :number,
  operandor2 :number,
  tipo: 'multiplicacion'
}
//esta es una union descriminante
type Operacion = OperacionSuma | OperacionMultiplicar

function operar( o: Operacion) {
  if(o.tipo == 'suma') {
    return o.sumando1 + o.sumando2
  }else if (o.tipo == 'multiplicacion') {
     return o.operandor1 * o.operandor2
  }

}