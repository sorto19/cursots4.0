type Vehiculo ={
 readonly fabricante: string
 arrancarMotor() : void
 repostar() : void
 detenerMotor() : void
}
type VehiculoTerrestre = Vehiculo & {
conducir() : void
}
interface VehiculoTerrestre  extends Vehiculo{
 conducir() : void
}
interface VehiculoMaritimo extends Vehiculo{
 sonarSirena() : void
 encenderChimenea() : void
 detenerChimenea() :void
}
class OpelCorsa implements VehiculoTerrestre {
 fabricante : string ="Opel"
 conducir(): void {
 console.log("brum brum")
 }
 arrancarMotor(): void {
 console.log("rummmmm")
 }
 repostar():void {
 console.log("Echandoo $20 de gasolina")
 }
 detenerChimenea():void {
  console.log("hjkbfjv.....")
 }
}
 function procesar(v: Vehiculo) {
 v.arrancarMotor()
 }