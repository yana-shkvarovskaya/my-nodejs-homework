const { Contact } = require("../../models");

const getAllContacts = async (req, res) => {
  const contacts = await Contact.find({});
  res.json({
    status: "success",
    code: 200,
    payload: { contacts },
  });
};

module.exports = getAllContacts;
