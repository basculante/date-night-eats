const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const emailRecepient = "miriambustos23@gmail.com";
const senderEmail = "basculantetank@gmail.com";

const sendEmail = async ({
  firstName,
  lastName,
  email,
  phone,
  address,
  date,
  kit,
}) => {
  const text = `<p>${firstName} ${lastName}</p><p>Email: ${email}</p><p>Phone: ${phone}</p><p>Address:${address}</p><p>Pickup Date: ${date}</p><p>Selected Kit: ${kit}</p>`;
  const msg = {
    to: emailRecepient,
    from: senderEmail,
    subject: `${firstName} ${lastName} - Date Night Eats!`,
    text,
    html: `<div>${text}</div>`,
  };
  try {
    await sgMail.send(msg);
    return { statusCode: 200, message: "The email was sent succesfully." };
  } catch (error) {
    const errorMsg = error.response.body.errors[0].message;
    return {
      statusCode: error.code,
      error: errorMsg,
    };
  }
};

export { sendEmail };
