/*interfaz de datos de usuario*/
interface userData {
username : string,
created_at: Date,
super_user: boolean
readonly personal: {
  name: string
  email: string
}
logout(): void
rename: (username: string) => void,
}
/*funcion utilizando la interface de userData*/
function login() : userData{
  return {
   username: 'admin',
   created_at: new Date(),
   super_user: true,
   personal: {
        name: 'jesusito',
        email: 'ramonsorto1',

   },
   logout() {
     console.log('Adios')
   },
   rename(username) {
     console.log('Todo: Rename account')
    }
  }
}
let l = login()
console.log(l.username)
l.username = 'sorto'
l.rename('sorto')
l.personal.name = 'hola sorto'