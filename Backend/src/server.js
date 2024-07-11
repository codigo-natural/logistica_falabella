import express from "express";
import cors from "cors";
import { config } from "./config/index.js";
import connection from "./config/database.js";
import routes from "./routes/index.js";

const app = express();
const port = config.port;

// Middlewares
app.use(cors());
app.use(express.json());

app.use("/api", routes);

app.get("/", async (req, res) => {
  await connection.query("SELECT NOW()");
  res.send("Hello World!");
});
app.listen(port, () => console.log(`Example app listening on port ${port}!`));

export default app;
