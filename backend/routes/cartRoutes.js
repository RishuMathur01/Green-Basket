const express = require("express");
const router = express.Router();
const auth = require("../middleware/authMiddleware");
const { addToCart, getCart } = require("../controllers/cart.controller");

router.post("/", auth, addToCart);
router.get("/", auth, getCart);

module.exports = router;




// const express = require('express');
// const router = express.Router();
// const Cart = require('../models/Cart');
// const Product = require('../models/Product');
// const authMiddleware = require('../middleware/auth'); // ensure user is authenticated

// // POST /api/cart - Add to cart
// router.post('/', authMiddleware, async (req, res) => {
//   const { productId, quantity = 1 } = req.body;
//   const userId = req.user.id;

//   try {
//     let cart = await Cart.findOne({ userId });

//     if (!cart) {
//       cart = new Cart({ userId, items: [{ productId, quantity }] });
//     } else {
//       const itemIndex = cart.items.findIndex(item => item.productId.equals(productId));
//       if (itemIndex > -1) {
//         cart.items[itemIndex].quantity += quantity;
//       } else {
//         cart.items.push({ productId, quantity });
//       }
//     }

//     await cart.save();
//     res.status(200).json(cart);
//   } catch (err) {
//     res.status(500).json({ message: 'Error adding to cart', error: err.message });
//   }
// });

// // GET /api/cart - Get user's cart
// router.get('/', authMiddleware, async (req, res) => {
//   try {
//     const cart = await Cart.findOne({ userId: req.user.id }).populate('items.productId');
//     if (!cart) return res.status(200).json({ items: [] });
//     res.json(cart);
//   } catch (err) {
//     res.status(500).json({ message: 'Error fetching cart', error: err.message });
//   }
// });

// module.exports = router;
