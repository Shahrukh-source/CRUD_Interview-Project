const express = require("express")
const router = express.Router()


const { createForm } = require("../controllers/FormCreate")
const { Formread } = require("../controllers/FormRead")
const { updateForm } = require("../controllers/formupdate")
const { deleteForm } = require("../controllers/formdelete")
router.post("/formcreate",createForm)
router.get("/formcget",Formread)
router.put("/formcreate",updateForm)
router.delete("/formcreate",deleteForm)

module.exports = router;