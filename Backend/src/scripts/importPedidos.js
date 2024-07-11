import fs from "fs";
import csv from 'csv-parser'
import connection from "../config/database.js";

async function importPedidos() {
  const pedidos = [];

  fs.createReadStream("data/pedidos.csv")
    .pipe(csv())
    .on("data", (row) => {
      pedidos.push({
        usuario: row.usuario,
        numeroEnvio: row.numeroEnvio,
        nombreOficina: row.nombreOficina,
        fechaRegistroEnvio: new Date(row.fechaRegistroEnvio),
        alto: parseInt(row.alto) || 0,
        largo: parseInt(row.largo) || 0,
        ancho: parseInt(row.ancho) || 0,
        seller: row.seller,
        direccionSeller: row.direccionSeller,
      });
    })
    .on("end", async () => {
      try {
        await connection.getConnection();

        for (const pedido of pedidos) {
          await connection.query(
            "INSERT INTO pedidos (usuario, numeroEnvio, nombreOficina, fechaRegistroEnvio, alto, largo, ancho, seller, direccionSeller) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)",
            [
              pedido.usuario,
              pedido.numeroEnvio,
              pedido.nombreOficina,
              pedido.fechaRegistroEnvio,
              pedido.alto,
              pedido.largo,
              pedido.ancho,
              pedido.seller,
              pedido.direccionSeller,
            ]
          );
        }

        await connection.releaseConnection();
        console.log(`Pedidos importados correctamente ${pedidos.length}`);
        process.exit(0);
      } catch (error) {
        // await connection.rollback();
        console.error("Error al importar pedidos:", error);
        process.exit(1);
      }
    });
}

importPedidos();
