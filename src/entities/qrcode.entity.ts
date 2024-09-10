import { Entity, PrimaryColumn } from "typeorm";

@Entity({ name: "qrcode" })
export class QrCode {
  @PrimaryColumn("varchar")
  qrcode: string;
}
