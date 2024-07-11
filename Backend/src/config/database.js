import { createPool } from "mysql2/promise.js";
import { config } from "./index.js";

const connection = createPool({
  host: config.dbHost,
  user: config.dbUser,
  password: config.dbPassword,
  database: config.dbName,
});

connection.on("connection", () => console.log("DB Connected!"));

export default connection;
