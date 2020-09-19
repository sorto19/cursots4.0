/*una clase se puede3 ser epcansulada y vista de distintos tipos a la ves*/
interface Shape {
 readonly sides: number
    area(): number
    perimeter(): number
}
  function proccess( s: Shape){
    //do shomething
     console.log({ area: s.area()})
  }
  /*implementando la interface shape en la clase  rectangle*/
 class Rectangle implements Shape {
   sides : number = 4
    constructor(readonly widht: number, readonly height: number){
    }
    area() : number{
     return this.widht * this.height
     }
     perimeter(): number {
     return 2 * this.widht + 2 * this.height
     }
 }
 let r= new Rectangle(4,4)
 proccess(r)
