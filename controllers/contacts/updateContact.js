const { NotFound } = require("http-errors");
const { Contact } = require("../../models");

const updateContact = async (req, res) => {
  const contact = await Contact.findByIdAndUpdate(
    req.params.contactId,
    req.body,
    { new: true }
  );
  if (Object.keys(req.body).length === 0) {
    res
      .status(400)
      .json({ status: "error", code: 400, message: "missing fields" });
  }
  if (!contact) {
    throw new NotFound("Contact not found");
  }
  res.json({
    status: "success",
    code: 200,
    payload: { contact },
  });
};

module.exports = updateContact;
