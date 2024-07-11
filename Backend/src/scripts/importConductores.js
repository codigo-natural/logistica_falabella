import fs from "fs";
import csv from "csv-parser";
import connection from "../config/database.js";

async function importConductores() {
  const conductores = [];

  fs.createReadStream("data/conductores.csv")
    .pipe(csv())
    .on("data", (row) => {
      conductores.push({
        placa: row.Placa,
        documento: row.Documento,
        operadorLogistico: row["operadorLogistico"],
      });
    })
    .on("end", async () => {
      try {
        await connection.getConnection();

        for (const conductor of conductores) {
          await connection.query(
            "INSERT INTO conductores (placa, documento, operadorLogistico) VALUES (?, ?, ?)",
            [conductor.placa, conductor.documento, conductor.operadorLogistico]
          );
        }

        await connection.releaseConnection();
        console.log(
          `Conductores importados correctamente ${conductores.length}`
        );
        process.exit(0);
      } catch (error) {
        // await connection.rollback();
        console.error("Error al importar conductores:", error);
        process.exit(1);
      }
    });
}

importConductores();
