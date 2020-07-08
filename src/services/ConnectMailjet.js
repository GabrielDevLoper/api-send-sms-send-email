import mailjet from "node-mailjet";

const emailjet = mailjet.connect(
  process.env.MAILJET_API_KEY,
  process.env.MAILJET_SECRET_KEY
);

export default emailjet;
