import { Router } from "express";

import SmsController from "./controllers/SmsController";
import EmailController from "./controllers/EmailController";

const routes = Router();

routes.post("/send-sms", SmsController.sendSms);
routes.post("/send-email", EmailController.sendEmail);

export default routes;
