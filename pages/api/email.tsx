import { sendEmail } from "../../utils/sendEmail";

export default async (req, res) => {
  if (req.method === "POST") {
    const { firstName, lastName, email, phone, address, date, kit } = req.body;
    const emailResponse = await sendEmail({
      firstName,
      lastName,
      email,
      phone,
      address,
      date,
      kit,
    });
    if (emailResponse.statusCode === 200) {
      return res.status(emailResponse.statusCode).send(emailResponse.message);
    } else {
      return res.status(emailResponse.statusCode).send(emailResponse.error);
    }
  } else {
    return res.status(404).json({
      error: {
        code: "not_found",
        message:
          "The requested endpoint was not found or doesn't support this method.",
      },
    });
  }
};
