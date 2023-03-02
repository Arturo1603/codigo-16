//* como hemos usado el type module en el archivo package.json en el main podemos usar el import, export
import express from "express";

const app = express();

// Vamos a crear una ruta
// ruta: es el lugar donde vamos a mostrar nuestro resultado
// sagafalabella.com.pe/sagaLaptops
// raiz: sagafalabella.com.pe
// ruta o endpoint: sagalaptops

// Esto esta creando la ruta en la raiz y luego vamos a recibir 2
// *request => Es la informacion que vamosa  recibir de quien haga la peticion 
// *response => La respuesta que se dara 

// Agregamos lo siguiente para que node entienda lo que el cliente envia
app.use(express.json());


// Haremos un arreglo que contenta nuestra lista de tareas
const todoListArray = [];


app.get("/", (request, response) => {
    //  Vamos a responder que cuando el usuario entre a la raiz, esta respuesta sea 
    // un JSON
    response.json(
        {
            total: todoListArray.length,
            task: todoListArray
        }
    )
});

app.put("/update-task/:id", (req, res) => {
    // vamos a actualizar
    // ! Todo lo que venga de params es un string
    // cuando hacemos un put mandamos el id, el id ya no vendria en el body sino en el params
    // re.params.id el id debe ser nombrado del mismo modo que el id que estamos mandando en el endpoint
    const id = req.params.id;
    //* lo que el cliente envie estara en el body
    const data = req.body;

    // 1 buscar el indice de la tarea por el id
    const taskIndex = todoListArray.findIndex(
        (todoTask) => todoTask.id === Number(id)
    );
    
    // chancamos la tarea ubicada en el indice encontrado, mandando por spreadOperator el objeto en si, mas los datos a actuaiizar
    todoListArray[taskIndex] = {
        ...todoListArray[taskIndex],
        ...data,
    };
    
    // respondemos con la tarea actualizada
    return res.json({
        tarea: todoListArray[taskIndex],
    });

});

// creamos nuestro metodo post para poder crear
app.post("/create-task", (request, response) =>{
    // request.body es la informacion que el cliente envia
    console.log(request.body);
    const task = request.body;
    task.created_At = new Date();
    task.id = todoListArray.length + 1;

    todoListArray.push(task);
    response.json(
        {
            task
        }
    )
});


// Para poder ver esto desde nuestro navegador vamos a habilitar un puerto en nuestra computadora
app.listen(6001, () => console.log("El servidor inicio en el puerto http://localhost:6001"));
