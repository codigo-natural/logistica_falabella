import connection from "../config/database.js";

export class Conductor {
  static async getAll() {
    const [rows] = await connection.query("SELECT * FROM conductores");
    return rows;
  }

  static async getById(id) {
    const [rows] = await connection.query(
      "SELECT * FROM conductores WHERE id = ?",
      [id]
    );
    return rows[0];
  }

  static async create(conductor) {
    const [result] = await connection.query(
      "INSERT INTO conductores SET ?",
      conductor
    );
    const id = result.insertId;
    return { id, ...conductor };
  }

  static async update(id, conductor) {
    const [result] = await connection.query(
      "UPDATE conductores SET ? WHERE id = ?",
      [conductor, id]
    );
    return result.affectedRows > 0;
  }
  static async delete(id) {
    const [result] = await connection.query(
      "DELETE FROM conductores WHERE id = ?",
      [id]
    );
    return result.affectedRows > 0;
  }
}