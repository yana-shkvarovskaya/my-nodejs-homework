const contactsOperations = require("../../models/contacts");

const addContact = async (req, res) => {
  const contact = await contactsOperations.addContact(req.body);
  res.status(201).json({
    status: "success",
    code: 201,
    payload: { contact },
  });
};

module.exports = addContact;
