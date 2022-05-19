const contactsOperations = require("../../models/contacts");
const getAllContacts = async (req, res) => {
  const contacts = await contactsOperations.listContacts();
  res.json({
    status: "success",
    code: 200,
    payload: { contacts },
  });
};

module.exports = getAllContacts;
