const sgMail = require("@sendgrid/mail");
require("dotenv").config();

const { API_KEY_SENDGRID } = process.env;

sgMail.setApiKey(API_KEY_SENDGRID);

const sendEmail = async (data) => {
  const email = { ...data, from: "shkvarovskayayana@gmail.com" };
  // eslint-disable-next-line no-useless-catch
  try {
    await sgMail.send(email);
    return true;
  } catch (error) {
    throw error;
  }
};

module.exports = sendEmail;
