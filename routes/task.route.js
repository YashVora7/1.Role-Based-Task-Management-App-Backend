const { Router } = require("express");
const { createTask, deleteTask, adminGetAllTasks, getTask, updateTask, addComment } = require("../controllers/task.controller");
const { auth, admin } = require("../middleware/user.middleware");

const taskRouter = (io) => {
    const router = Router();

    router.get("/", auth, getTask);
    router.post("/create", auth, (req, res) => createTask(req, res, io));
    router.put("/update/:id", auth, (req, res) => updateTask(req, res, io));
    router.delete("/delete/:id", auth, (req, res) => deleteTask(req, res, io));
    router.get("/admin", auth, admin, adminGetAllTasks);
    router.post("/:taskId/comment", auth, (req, res) => addComment(req, res, io));

    return router;
};

module.exports = taskRouter;
