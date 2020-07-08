import emailjet from "../services/ConnectMailjet";

class EmailController {
  async sendEmail(req, res) {
    const { from_email, from_name, to_email, to_name, title, text } = req.body;

    const request = await emailjet.post("send", { version: "v3.1" }).request({
      Messages: [
        {
          From: {
            Email: from_email,
            Name: from_name,
          },
          To: [
            {
              Email: to_email,
              Name: to_name,
            },
          ],
          Subject: title,
          TextPart: text,
          CustomID: "AppGettingStartedTest",
        },
      ],
    });

    return res.json(request.body);
  }
}

export default new EmailController();
