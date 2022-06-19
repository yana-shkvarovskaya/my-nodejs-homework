const { User } = require("../../models");
const gravatar = require("gravatar");
const { Conflict } = require("http-errors");
const { uuid } = require("uuid");
const { sendEmail } = require("../../helpers");

const signup = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (user) {
    throw new Conflict("Email in use");
  }
  const avatarUrl = gravatar.url(email);
  const verificationToken = uuid();
  const newUser = new User({ email, password, avatarUrl, verificationToken });

  newUser.setPassword(password);
  await newUser.save();
  const mail = {
    to: email,
    subject: "Email confirmation",
    html: `<a target="_blank" href="http://localhost:3000/api/users/verify/${verificationToken}">Confirm email</a>`,
  };
  await sendEmail(mail);
  res.status(201).json({
    status: "success",
    code: 201,
    data: {
      user: {
        email,
        password,
        avatarUrl,
        verificationToken,
      },
    },
  });
};

module.exports = signup;
