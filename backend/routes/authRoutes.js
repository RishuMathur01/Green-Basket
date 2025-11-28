
const express = require("express");
const router = express.Router();
const { register, login } = require("../controllers/auth.controller");

router.post("/register", register);
router.post("/login", login);

module.exports = router;



















// const express = require("express");
// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");
// const User = require("../models/User");

// const router = express.Router();


// // REGISTER
// router.post("/register", async (req, res) => {
//   const { name, email, password, role } = req.body;

//   try {
//     const exists = await User.findOne({ email });
//     if (exists) return res.status(400).json({ message: "User already exists" });

//     const hashed = await bcrypt.hash(password, 10);

//     const user = new User({ name, email, password: hashed, role });
//     await user.save();

//     res.json({ message: "Registration successful" });

//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: "Server error" });
//   }
// });

// // LOGIN
// router.post("/login", async (req, res) => {
//   const { email, password } = req.body;

//   try {
//     const user = await User.findOne({ email });
//     if (!user) return res.status(400).json({ message: "User not found" });

//     const match = await bcrypt.compare(password, user.password);
//     if (!match) return res.status(400).json({ message: "Incorrect password" });

//     const token = jwt.sign(
//       { userId: user._id, role: user.role },
//       process.env.JWT_SECRET,
//       { expiresIn: "1h" }
//     );

//     res.json({ token, role: user.role });

//   } catch (err) {
//     res.status(500).json({ message: "Server error" });
//   }
// });

// module.exports = router;
