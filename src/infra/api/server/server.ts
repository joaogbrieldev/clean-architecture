import dotenv from "dotenv";
import { app } from "../express/express";

dotenv.config();
const port: number = Number(process.env.PORT) || 3005;

app.listen(port, () => {
  console.log("Server Running...");
});
