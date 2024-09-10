import { Entity, PrimaryColumn } from "typeorm";

@Entity({ name: "qrcode_valid" })
export class QrCodeValid {
  @PrimaryColumn("varchar")
  qrcode: string;
}
