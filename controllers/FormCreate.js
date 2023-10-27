const Form = require("../models/Form");

exports.createForm = async (req, res) => {
  try {
    const { name, lastname, email, mobilenumber, project } = req.body;
    const form = await Form.create({
      name,
      lastname,
      email,
      mobilenumber,
      project,
    });
    res.status(200).json({
      success: true,
      data: form,
      message: "successfully created ",
    });
  } catch (error) {
    res.status(500).json({
      success: false,

      message: "data is not created",
    });
  }
};
