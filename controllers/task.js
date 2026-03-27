const Task = require("../models/task");

async function createTask(req, res){
    // prueba para ver si sale bien en temrinal ejecutando insomnia
    // console.log("creando nuestra primera tarea");
    // console.log(req.body);

    const task = new Task();
    const params = req.body;

    task.title = params.title;
    task.description = params.description;

    try {
        const taskStore =  await task.save();

        if(!taskStore) {
            res.status(400).send({ msg: "No se ha guardado la tarea"});
        }else
            res.status(200).send({taskStore});
    } catch (error){
        res.status(500).send(error);
    }
}

async function getTasks(req, res){
    console.log("ejecutando getTasks");

    try {
        const tasks = await Task.find({ completed: false}).sort ({created_at: -1});

        if(!tasks){
            res.status(400).send({ msg: "error al obtener las tareas"})
        }else {
            res.status(200).send(tasks);
        }
    }catch (error){
        res.status(500).send(error);
    }

}

async function getTask(req, res){
    console.log("Ejecutando gesTask");
    const idTask = req.params.id;
    console.log(req.params);

    try {
        const task = await Task.findById(idTask);

        if(!task){
            res.status(400).send({ msg: "No se ha encontrado la tarea indicada"});
        }else{
            res.status(200).send(task);
        }
    }catch (error){
        res.status(500).send(error);
    }
}

async function updateTask(req, res){
    console.log("Ejecutando updateTask");

    const idTask = req.params.id;
    const params = req.body;

    console.log('idTask', idTask);
    console.log('params', params);

    try {
        const task = await Task.findByIdAndUpdate(idTask, params, {returnDocument: "after"});

        if(!task){
            res.status(400).send ({ msg: "No se ha podido acutalizar la tarea"});
        }else{
            res.status(200).send ({ msg: "actualizacion completada"});
        }
    }catch(error){
        res.status(500).send(error)
    }    
}

async function deleteTask(req, res){
  console.log("deleteTask");
  const idTask = req.params.id;

  try {
    const task = await Task.findByIdAndDelete(idTask);
    if(!task){
        res.status(400).send({ msg: "No se ha podido eliminar la tarea"});
    }else{
        res.status(200).send({ msg: "Tarea eliminada correctamente"});
    }
  }catch (error){
    res.status(500).send(error);
  }

}

module.exports = {

    createTask,
    getTasks,
    getTask,
    updateTask,
    deleteTask,
};