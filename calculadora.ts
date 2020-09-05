//[datos] -->sumar-->[datos]
function sumar(m :number,  n: number)  :number{
    let suma = m+n
    console.log(`${m} +${n} = ${suma}`)
    return suma
}

//funcion callback
let restar :(m: number, n:number)=>number= function(m:number , n:number){
    let resta = m -n 
    console.log(`${m} - ${n} = ${resta}`)
    return resta
}

//funcion callback
let multiplicar: (a:number, b:number, callback:( r:number) =>void) => void
multiplicar =(a,b, callback)=>callback(a*b)
multiplicar(4,5, function(result){
    console.log(`Resultado: ${result}`)
})
