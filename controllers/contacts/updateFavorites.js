const { NotFound } = require("http-errors");
const { Contact } = require("../../models");

const updateFavorites = async (req, res) => {
  const { favorite } = req.body;
  const contact = await Contact.findByIdAndUpdate(
    req.params.contactId,
    { favorite },
    { new: true }
  );
  if (!req.body) {
    res
      .status(400)
      .json({ status: "error", code: 400, message: "missing field favorite" });
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

module.exports = updateFavorites;
