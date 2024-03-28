const mysql = require("mysql2/promise");
const databaseConfig = require("../config/database.js");

async function getAllProduct() {
  const connection = await mysql.createConnection(databaseConfig);

  const [rows] = await connection.query("SELECT * FROM product");

  await connection.end();

  return rows;
}

async function createProduct(descricao, quantidadeEstoque, unidadeMedida, Valorunidade) {
  const connection = await mysql.createConnection(databaseConfig);

  const insertproduct =
    "INSERT INTO product(descricao, quantidadeEstoque, unidadeMedida, Valorunidade) VALUES(?, ?, ?, ?)";
  await connection.query(insertproduct, [descricao, quantidadeEstoque, unidadeMedida, Valorunidade]);
  await connection.end();
}

async function updateProduct(id, descricao, quantidadeEstoque, unidadeMedida, Valorunidade) {
  const connection = await mysql.createConnection(databaseConfig);

  const updateproduct =
    "UPDATE product SET descricao = ?, quantidadeEstoque = ?, unidadeMedida, Valorunidade = ? WHERE id = ?";
  await connection.query(updateproduct, [descricao, quantidadeEstoque, unidadeMedida, Valorunidade, id]);
  await connection.end();
}

async function deleteProduct(id) {
  const connection = await mysql.createConnection(databaseConfig);

  await connection.query("DELETE FROM product WHERE id = ?", [id]);
  await connection.end();
}

async function getProductById(id) {
  const connection = await mysql.createConnection(databaseConfig);

  const [product] = await connection.query(
    "SELECT * FROM product WHERE id = ?",
    [id]
  );

  await connection.end();

  return product;
}

module.exports = {
  getProductById,
  getAllProduct,
  createProduct,
  updateProduct,
  deleteProduct,
};
