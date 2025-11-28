const express = require("express");
const router = express.Router();
const auth = require("../middleware/authMiddleware");
const { getAllProducts, addProduct } = require("../controllers/product.controller");

router.get("/", getAllProducts);
router.post("/", auth, addProduct);

module.exports = router;






// const express = require('express');
// const router = express.Router();
// const Product = require('../models/Product');
// const authMiddleware = require('../middleware/authMiddleware');

// // Get all products
// router.get('/', async (req, res) => {
//   try {
//     const products = await Product.find();
//     res.json(products);
//   } catch (error) {
//     console.error('Error fetching products:', error);
//     res.status(500).json({ message: 'Something went wrong' });
//   }
// });

// // Add a new product (protected route)
// router.post('/', authMiddleware, async (req, res) => {
//   const { name, price, description } = req.body;

//   try {
//     const newProduct = new Product({
//       name,
//       price,
//       description,
//       farmer: req.user.userId,
//     });

//     await newProduct.save();
//     res.status(201).json(newProduct);
//   } catch (error) {
//     console.error('Error adding product:', error);
//     res.status(500).json({ message: 'Something went wrong' });
//   }
// });

// module.exports = router;
