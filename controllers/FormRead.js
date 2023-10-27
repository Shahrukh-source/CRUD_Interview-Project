const Form = require("../models/Form")

exports.Formread = async(req,res)=>{
    try{
        const {_id} = req.params
        const formread = await Form.findById({_id})

        res.status(200).json({
            success:true,
            data:formread,
            message:"successfully get data"


        })
    }catch(eror){
        res.status(500).json({
            success:false,
            
            message:"data is not find"
        })
    }
}