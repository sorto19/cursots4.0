class Rectangulo {
       ancho:number
       alto: number
       private _nombre: string

    constructor(ancho: number, alto: number) {
       
        this.ancho=ancho
        this.alto=alto
    } 
  //con get por dentro es una funcion y por fuera un atributo
    get area() {
       
        return this.ancho * this.alto
    }
    get nombre() {
        return this._nombre
    }
    set nombre(value: string) {
        console.log("seteo el nombre")
        this._nombre = value
    }
    perimetro() {
        return this.ancho *2 + this.alto+2
    }
}
let r1 = new Rectangulo(10,15)
r1.nombre= "karina"

console.log(`Area del rectangulo es ${r1.nombre}`)
