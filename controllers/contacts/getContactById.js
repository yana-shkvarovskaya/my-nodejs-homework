const contactsOperations = require("../../models/contacts");
const { NotFound } = require("http-errors");

const getContactById = async (req, res) => {
  const contact = await contactsOperations.getContactById(req.params.contactId);
  if (!contact) {
    throw new NotFound("Contact not found");
  }
  res.json({
    status: "success",
    code: 200,
    payload: { contact },
  });
};

module.exports = getContactById;
