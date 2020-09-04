//funcion de tipo void  saludar
function saludar(nombre: string):string{ 
 return `hola encantado de verte, ${nombre.toUpperCase()}!`
}
console.log( saludar("Ramon"))  
//arrays 
let dias:string [] =["lunes","martes"]
/*tuplas*/
let db: [nombre:string, edad:number, pais: string, premium boolean]=["ramon", 25,"el salvador",true]