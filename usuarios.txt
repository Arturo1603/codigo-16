
    // crear ticket
    post tickets {
        titulo, descripcion, foto,correoUsuarioCreacion,precio
    }
    // update cuando un suarui acepta realizar un ticket
    put tickets{
        correoUsuarioCreacion,correoUsuarioRealizacion,precio, estado="en curso"
    }
    // cambiar estado de ticket a realizado
    put tickets{
        
    }


const usuarios = [
    {
        "nombre":"Pepe",
        "apellido": "Pepito",
        "correo": "pepito@gmail.com",
        "contraseña": "pepito123",
        "nacionalidad" :"peruana",
        "celular": 123456987,
        "descripcion" :"asdasdas",
        "foto" : "imange.png",
        "role" :"cliente/usuario",
        "gradoEducacion": "universitario, secundaria, tecnico",
        "metodoPagotarjeta":12456156415,
        "metodoPagocvv": 123,
        "fechaDeCreacion":"12/12/12"
    },
    {
        "nombre":"Juan",
        "apellido": "Juancito",
        "correo": "Juancito@gmail.com",
        "contraseña": "juanctio123",
        "nacionalidad" :"peruana",
        "celular": 123456987,
        "descripcion" :"asdasdas",
        "foto" : "imange.png",
        "role" :"cliente/usuario",
        "gradoEducacion": "universitario, secundaria, tecnico",
        "metodoPagotarjeta":12456156415,
        "metodoPagocvv": 123,
        "fechaDeCreacion":"12/12/12"
    },
]

const tickets = [
    {
    "id": 1,
    "titulo" : "me lele la cabeza",
    "descripcion": "sadadasda",
    "foto": "imagen.png",
    "estado": "pendiente/en curso/realizado/cancelado",
    "fechaCreacion": "12/12/12",
    "correoUsuarioCreacion": "pepito@gmail.com",
    "correoUsuarioRealizacion": "juancito@gmail.com",
    "FechadeRealizacion": "13/13/13",
    "precio": 120,
    "fotoSPruebasticketRealziado":"imange.png", 
    },
]


// const ticketsUsuarios = {
//     correoUsuario: "pepito@gmail.com",
//     id: 1,  
// }