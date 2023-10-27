const Form = require("../models/Form")


exports.updateForm = async(req,res)=>{
    try{
        const {id} = req.params;
        const {name, lastname, email, mobilenumber, project} = req.body 
        const form = await Todo.findByIdAndUpdate(
            {_id:id},
            {name, lastname, email, mobilenumber, project, updatedAt: Date.now()},
        )
       
        res.status(200).json({
            success:true,
            data:form,
            message:"successfully updated"

        })

    }catch(error){
        res.status(500).json({
            success:false,
            
            message:"data is not find"
        })
    }
}