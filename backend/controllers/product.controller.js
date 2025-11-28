const Product = require("../models/Product");
const logActivity = require("../middleware/logActivity");

// GET ALL
exports.getAllProducts = async (req, res) => {
  const products = await Product.find();
  res.json(products);
};

// ADD PRODUCT (farmer only)
exports.addProduct = async (req, res) => {
  try {
    const newProduct = new Product({
      name: req.body.name,
      price: req.body.price,
      description: req.body.description,
      imageUrl: req.body.imageUrl,
      category: req.body.category,
      farmer: req.user.userId
    });

    await newProduct.save();

    logActivity(req.user.userId, `add_product: ${newProduct._id}`, req);

    res.status(201).json(newProduct);
  } catch {
    res.status(500).json({ message: "Error adding product" });
  }
};
