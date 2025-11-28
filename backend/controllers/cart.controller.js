const Cart = require("../models/Cart");
const logActivity = require("../middleware/logActivity");

// ADD TO CART
exports.addToCart = async (req, res) => {
  const userId = req.user.userId;
  const { productId, quantity = 1 } = req.body;

  try {
    let cart = await Cart.findOne({ userId });

    if (!cart) {
      cart = new Cart({ userId, items: [{ productId, quantity }] });
    } else {
      const index = cart.items.findIndex(item => item.productId.equals(productId));

      if (index > -1) {
        cart.items[index].quantity += quantity;
      } else {
        cart.items.push({ productId, quantity });
      }
    }

    await cart.save();

    logActivity(userId, `add_to_cart: ${productId}`, req);

    res.json(cart);
  } catch (err) {
    res.status(500).json({ message: "Error adding to cart" });
  }
};

// GET CART
exports.getCart = async (req, res) => {
  try {
    const cart = await Cart.findOne({ userId: req.user.userId }).populate("items.productId");
    res.json(cart || { items: [] });
  } catch (err) {
    res.status(500).json({ message: "Error fetching cart" });
  }
};
