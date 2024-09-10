import app from "./server/server";
import bodyParser from "body-parser";
import qrcodeController from "./controllers/qrcode.controller";
import cors from "cors";

app.use(bodyParser.json());
app.use(cors());

app.use("/qr-code", qrcodeController);
