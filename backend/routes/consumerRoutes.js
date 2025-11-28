const express = require("express");
const router = express.Router();
const auth = require("../middleware/authMiddleware");

const Cart = require("../models/Cart");
const Order = require("../models/Order");
const Product = require("../models/Product");


router.get("/user", auth, async (req, res) => {
  res.json({ name: req.user.name, email: req.user.email, role: req.user.role });
});


router.get("/cart", auth, async (req, res) => {
  const cart = await Cart.findOne({ userId: req.user._id }).populate("items.productId");
  res.json(cart || { items: [] });
});


router.post("/cart/delete", auth, async (req, res) => {
  const { productId } = req.body;
  const cart = await Cart.findOne({ userId: req.user._id });
  if (!cart) return res.status(404).json({ message: "Cart not found" });

  cart.items = cart.items.filter(item => item.productId.toString() !== productId);
  await cart.save();
  res.json(cart);
});

router.post("/buy-now", auth, async (req, res) => {
  const { productId } = req.body;

  try {
    const order = new Order({
      userId: req.user._id,
      items: [{ productId, quantity: 1 }],
      status: "In Transit"
    });

    await order.save();

    res.json({ message: "Order placed", order });
  } catch (err) {
    res.status(500).json({ message: "Error placing order" });
  }
});









// GET /api/consumer/orders - Get orders
router.get("/orders", auth, async (req, res) => {
  const orders = await Order.find({ userId: req.user._id }).populate("items.productId");
  res.json(orders);
});

// POST /api/consumer/payment - Simulate payment
router.post("/payment", auth, async (req, res) => {
  const cart = await Cart.findOne({ userId: req.user._id });
  if (!cart || cart.items.length === 0) return res.status(400).json({ message: "Cart is empty" });

  // Create order
  const order = new Order({
    userId: req.user._id,
    items: cart.items.map(item => ({
      productId: item.productId,
      quantity: item.quantity,
      price: item.productId.price
    })),
    status: "In Transit"
  });

  await order.save();
  cart.items = [];
  await cart.save();

  res.json({ message: "Payment successful", order });
});

module.exports = router;
