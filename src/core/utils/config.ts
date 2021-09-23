import * as dotenv from "dotenv";

dotenv.config();
let path;
switch (process.env.NODE_ENV) {
  case "production":
    path = `${__dirname}/../../../.env`;
    break;
  default:
    path = `${__dirname}/../../../.env`;
}
dotenv.config({ path: path });

export const PORT = process.env.PORT;
