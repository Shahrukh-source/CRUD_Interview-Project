const express = require("express")
const app = express()

require("dotenv").config()
const PORT = process.env.PORT || 8000

app.use(express.json()) // middleware for body dataparser

const file = require("./routes/form") //use for mount
app.use("/api/v1",file)

app.listen(PORT,()=>{
    console.log(`server is working on ${PORT}`)
})

const dbConnect = require("./config/database") // DB CALL
dbConnect()

app.get("/",(req,res)=>{
    console.log("<h1>This is Home Page</h1>")
})