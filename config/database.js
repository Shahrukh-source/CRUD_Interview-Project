const mongoose = require("mongoose") // use for connect app to database mongodb

require("dotenv").config() // use for envirment load in process from env file

const dbConnect = ()=>{
    mongoose.connect(process.env.DATABASE_URL,{
        UseNewUrlParser:true,
        UseUnifiedTopology:true
    })
    .then(()=>{
        console.log("database is connected")
    })
    .catch((error)=>{
        console.log("databse is not connected")
        console.error(error)
        process.exit(1) // use for endup the application
    })
} 

module.exports = dbConnect