const mongoose = require("mongoose")

const formSchema  = new mongoose.Schema({
    name:{
        type:"string",
        require:true
    },
    lastname:{
        type:"string",
        require:true
    },
    email:{
        type:"string",
        require:true
    },
    mobilenumber:{
        type:"string",
        require:true
    },
    project:{
        type:"string",
        require:true
    }
})

module.exports = mongoose.model("form",formSchema)