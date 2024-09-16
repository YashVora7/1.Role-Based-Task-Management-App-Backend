const {Router} = require("express");
const { createTask, deleteTask, adminGetAllTasks, getTask } = require("../controllers/task.controller");
const { auth, admin } = require("../middleware/user.middleware");
const taskRouter = Router();

taskRouter.get("/",auth,getTask)
taskRouter.post("/create",auth, createTask)
taskRouter.delete("/delete/:id",auth, deleteTask)
taskRouter.get("/admin",auth, admin, adminGetAllTasks)

module.exports = taskRouter