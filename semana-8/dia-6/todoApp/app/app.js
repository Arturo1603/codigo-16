//1 traer la ruta
const URlmostrarTareas = "http://localhost:3000/";

//crear mi metodo que traera las tareas de mi back
const getTask = async() => {
    const response = await fetch(URlmostrarTareas);
    const {arrayTask : tareas} = await response.json();
    return tareas;
}

//capturar las variables que utilizare
const containerLista = document.querySelector("#containerLista");
const buttonGet = document.querySelector("#button-Get");

//crear mi metodo que pinte mis tareas traidas
buttonGet.onclick = async function(){
    const tareas = await getTask();
    tareas.forEach( async tarea => {
        const task = await tarea;
        containerLista.innerHTML += `
            <li class="noPoint">
                    <div class="card-body">
                    ${task.text}
                    </div>
                </li>

        `
    })
}
