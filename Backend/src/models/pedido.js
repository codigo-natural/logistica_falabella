import connection from "../config/database.js";

export class Pedido {
  static async getAll() {
    const [rows] = await connection.query("SELECT * FROM pedidos");
    return rows;
  }

  static async getById(id) {
    const [rows] = await connection.query(
      "SELECT * FROM pedidos WHERE id = ?",
      [id]
    );
    return rows[0];
  }

  static async create(pedido) {
    const [result] = await connection.query(
      "INSERT INTO pedidos SET ?",
      pedido
    );
    const id = result.insertId;
    return { id, ...pedido };
  }

  static async update(id, pedido) {
    const [result] = await connection.query(
      "UPDATE pedidos SET ? WHERE id = ?",
      [pedido, id]
    );
    return result.affectedRows > 0;
  }

  static async delete(id) {
    const [result] = await connection.query(
      "DELETE FROM pedidos WHERE id = ?",
      [id]
    );
    return result.affectedRows > 0;
  }
}
