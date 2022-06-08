const { User } = require("../../models");
const gravatar = require("gravatar");
const { Conflict } = require("http-errors");

const signup = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (user) {
    throw new Conflict("Email in use");
  }
  const avatarUrl = gravatar.url(email);
  const newUser = new User({ email, password, avatarUrl });

  newUser.setPassword(password);
  newUser.save();

  res.status(201).json({
    status: "success",
    code: 201,
    data: {
      user: {
        email,
        password,
        avatarUrl,
      },
    },
  });
};

module.exports = signup;
