const Form = require("../models/Form")


exports.updateForm = async(req,res)=>{
    try{
        const {name, lastname, email, mobilenumber, project} = req.body
        const update = await Form.findByIdAndUpdate({name, lastname, email, mobilenumber, project,_id:name,_id:lastname,})
        res.status(200).json({
            success:true,
            data:update,
            message:"successfully updated"

        })

    }catch(error){
        res.status(500).json({
            success:false,
            
            message:"data is not find"
        })
    }
}