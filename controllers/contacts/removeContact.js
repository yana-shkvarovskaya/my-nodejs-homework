const { NotFound } = require("http-errors");
const { Contact } = require("../../models");

const removeContact = async (req, res) => {
  const contact = await Contact.findByIdAndRemove(req.params.contactId);
  if (!contact) {
    throw new NotFound("Contact not found");
  }
  res.json({
    status: "success",
    code: 200,
    message: "contact deleted",
    payload: { contact },
  });
};

module.exports = removeContact;
