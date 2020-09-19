/*los indizados son los arrays , objects*/
/*type Comparator {
  (first: string, second:  string) : number
  algorithm: string
  safe: boolean
}*/
type Comparator ={
 (first:string, second:string) :number
 algorithm: string
}
function sort (c:Comparator) {
 let out = c("first, second")
 console.log(`Ordenando con el criterio ${c.algorithm}: ${out}`)
}
interface Windows {
   accountID: number
}
function User (w: Windows) {
  w.accountID
}
interface Geometria {
 lados : number
 pintar(): void
}
interface Triangulo extends Geometria {
 base: number
 altura: number
}
interface Cuadrado extends Geometria {
  lado : number
}
function procesar (g: Geometria) {
 if(g.lados == 4){
  let cuadrado = g as Cuadrado
  cuadrado.lado
  }else if (g.lados == 3) {
  let triangulo = g as Triangulo
  triangulo.altura
  }
}
/* instanceof  con interface no se puede utilizar sirve para vcomprobar si es coincreta las guar54das*/
class Coche {
 fabricante: string = "honda"
}
class CocheConcreto implements Coche {
 fabricante = 'honda'
 move() {
 }
 }
 let c : Coche = new Coche()
 console.log(c instanceof Coche)
 console.log(c instanceof CocheConcreto)
