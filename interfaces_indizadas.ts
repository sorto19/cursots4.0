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