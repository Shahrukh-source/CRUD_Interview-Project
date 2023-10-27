const Form = require("../models/Form")


exports.deleteForm = async(req,res)=>{
    try{
const {_id} = req.prams
const deleteForm = await Form.findByIdAndDelete({_id:id})
res.status(200).json({
    success:true,
    data:deleteForm,
    message:"successfully delete "
})
    }catch(error){
        res.status(500).json({
            success:false,
            console:error(error),
            message:"data is not delete"
        })

    }
}

