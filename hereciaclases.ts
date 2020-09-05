class Vehiculo {
   fabricante: string
   constructor(fabricante :string) {
       this.fabricante = fabricante
   }
    moverse() {
        console.log(`vehiculo ${this.fabricante} se movio`)
        
    }
}
class VehiculoTerrestre extends Vehiculo {
    private tipo:string
    constructor(fabricante:string, tipo:string) {
        super(fabricante)
        this.tipo = tipo
    }
    moverse() {
        console.log(`brumm brumm hace mi ${this.tipo} `)
        super.moverse()
    }
}
class VehiculoAreo extends Vehiculo {
    moverse() {
        console.log("niumm")
        super.moverse()
    }
}

class VehiculoMaritimo extends Vehiculo {
    moverse() {
        console.log("el ruido de el mar ")
        super.moverse()
    }
}

let vehiculo =new VehiculoTerrestre("yamaha","moto")
vehiculo.moverse()