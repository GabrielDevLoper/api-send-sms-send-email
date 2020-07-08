import nexmo from "../services/ConnectNexmo";

class SmsController {
  async sendSms(req, res) {
    const { from, to, text } = req.body; //Desestruturação

    await nexmo.message.sendSms(from, to, text);

    return res.json({ message: "Messagem enviada com sucesso!" });
  }
}

export default new SmsController();
