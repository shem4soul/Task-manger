const getAllTasks = (req, res) => {
    res.send('get all tasks Mr. shittu')
}

const createTask = (req, res) => {
    res.json(req.body)
}
const getTask = (req, res) => {
    res.json({id:req.params.id } )
}

const updateTask = (req, res) => {
    res.send('update tasks')
}

const deleteTask = (req, res) => {
    res.send('delete tasks')
}



module.exports = {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask
}