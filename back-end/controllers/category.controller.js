const sql = require("../config/db");

const getAllCategory = async (req, res) => {
  const data = await sql`SELECT * FROM categories`;
  res.status(200).json({});
};
const createCategory = () => {};
const updateCategory = () => {};
const deleteCategory = () => {};

module.exports = {
  getAllCategory,
  createCategory,
  updateCategory,
  deleteCategory,
};
