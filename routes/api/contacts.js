const express = require("express");
const router = express.Router();

const { validation, ctrlWrapper } = require("../../middlewares");
const {
  contactCreateScheme,
  contactUpdateScheme,
  favoriteContactScheme,
} = require("../../schemes/");
const { contacts: ctrl } = require("../../controllers");

router.get("/", ctrlWrapper(ctrl.getAllContacts));
router.get("/:contactId", ctrlWrapper(ctrl.getContactById));
router.post("/", validation(contactCreateScheme), ctrlWrapper(ctrl.addContact));
router.delete("/:contactId", ctrlWrapper(ctrl.removeContact));
router.put(
  "/:contactId",
  validation(contactUpdateScheme),
  ctrlWrapper(ctrl.updateContact)
);
router.patch(
  "/:contactId/favorite",
  validation(favoriteContactScheme),
  ctrlWrapper(ctrl.updateFavorites)
);

module.exports = router;
