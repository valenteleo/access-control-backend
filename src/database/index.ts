import "reflect-metadata";
import { DataSource } from "typeorm";
import { QrCode } from "../entities/qrcode.entity";
import { QrCodeValid } from "../entities/qrcode-valid";

const AppDataSource = new DataSource({
  type: "mssql",
  host: "",
  password: "",
  username: "",
  port: 0,
  database: "",
  synchronize: true,
  entities: [QrCode, QrCodeValid],
  options: {
    trustServerCertificate: true,
    encrypt: true,
  },
});

export default AppDataSource;
