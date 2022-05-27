const { Contact } = require("../../models");
const { NotFound } = require("http-errors");

const getContactById = async (req, res) => {
  const contact = await Contact.findById(req.params.contactId);
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
