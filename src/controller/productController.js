const productService = require("../service/product.js");

async function getAllProduct(req, res) {
  try {
    const rows = await productService.getAllProduct();

    res.status(200).json(rows);
  } catch (error) {
    res.status(500).send({
      message: "Error getting products",
      body: error.message,
    });
  }
}

async function createProduct(req, res) {
  const { descricao, quantidadeEstoque, unidadeMedida, valorUnidade} = req.body;
  try {
    await productService.createProduct(descricao, quantidadeEstoque, unidadeMedida, valorUnidade);
    res.status(201).json({ message: "sucess" });
  } catch (error) {
    res.status(500).send({
      message: "error ading product",
      error: error.message,
    });
  }
}

async function updateProduct(req, res) {
  try {
    const { id } = req.params;
    const { descricao, quantidadeEstoque, unidadeMedida, valorUnidade} = req.body;
    res.status(504).json("sucess");
  } catch (error) {
    res.status(500).send({
      message: "error updating product",
      body: error.message,
    });
  }
}

async function deleteProduct(req, res) {
  try {
    const { id } = req.params;

    await productService.deleteProduct(id);

    res.status(200).send({ message: "Deleted product!" });
  } catch (error) {
    res.status(500).send({
      message: "Error deleting product!",
      error: error.message,
    });
  }
}

async function getProductById(req, res) {
  try {
    const { id } = req.params;

    const product = await productService.getProductById(id);

    res.status(200).json(product);
  } catch (error) {
    res.status(500).send({
      message: "Error getting product by ID.",
      error: error.message,
    });
  }
}

module.exports = {
  getProductById,
  getAllProduct,
  createProduct,
  updateProduct,
  deleteProduct,
};
