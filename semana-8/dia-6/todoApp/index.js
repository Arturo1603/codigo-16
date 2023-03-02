import express from "express";
import cors from "cors";



const app = express();

app.use(express.urlencoded());
app.use(express.json());
app.use(cors());


//servira para almacenar las tareas que mostraremos luego
const arrayTask = [];

//metodo para mostrar tareas
app.get("/", (request, response) => {
    response.json(
        {
            arrayTask,
        }
    )
});




//metodoo para crear tareas
app.post("/task", (request, response) =>{

    console.log(request.body.task_text);
    const task = { 
        id: arrayTask.length + 1,
        text: request.body.task_text, 
        status: "todo",
        created_at: new Date(), 
    };
    // task.request.body.task_text;
    // task.created_At = new Date();
    // task.id = arrayTask.length + 1;
    arrayTask.push(task);
    response.json(
        {
            total : arrayTask.length,
            arrayTask,
        }
    )
})

app.listen(3000, () => console.log("El servidor inicio en el puerto http://localhost:3000/"))