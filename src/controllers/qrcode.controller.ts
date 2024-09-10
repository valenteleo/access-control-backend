import { Router, Request, Response } from "express";
import AppDataSource from "../database";
import { QrCode } from "../entities/qrcode.entity";
import { QrCodeValid } from "../entities/qrcode-valid";

const router = Router();
const qrCodeRepository = AppDataSource.getRepository(QrCode);
const qrCodeValidRepository = AppDataSource.getRepository(QrCodeValid);

// NOTE: Rotas do micro serviço do QRCode.

router.get("/:qrcode", async (req: Request, res: Response) => {
  try {
    const { qrcode } = req.params;
    const response = await qrCodeRepository.findOne({
      where: { qrcode: qrcode },
    });

    res.status(200).send(response.qrcode);

    const qrcodeValid = qrCodeValidRepository.create({ qrcode });
    await qrCodeValidRepository.save(qrcodeValid);

    console.log(`QRCode: ${qrcode} válido.`);
    return await qrCodeRepository.delete(response);
  } catch (error) {
    console.log("QRCode inválido");
    return res.status(404).send("none");
  }
});

router.post("/generate", async (req: Request, res: Response) => {
  try {
    const { qrcode } = req.body;
    const createQrCode = qrCodeRepository.create({ qrcode });

    await qrCodeRepository.save(createQrCode);

    return res.json({ message: "QR Code criado com sucesso!" });
  } catch (error) {
    return res.json({ message: error.message });
  }
});

export default router;
