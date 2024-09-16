const express = require("express");
const cors = require('cors');
const connection = require("./config/db");
const userRouter = require("./routes/user.route");
const taskRouter = require("./routes/task.route");
const app = express()
// app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors());
app.use("/user",userRouter)
app.use("/task",taskRouter)

app.listen(8080, ()=>{
    console.log("Server Successfully Running on 8080");
    connection()
})