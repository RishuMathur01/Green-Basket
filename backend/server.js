const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/products", require("./routes/productRoutes"));
app.use("/api/cart", require("./routes/cartRoutes"));
app.use("/api/consumer", require("./routes/consumerRoutes"));

const PORT = process.env.PORT || 5002;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));





// const express = require("express");
// const cors = require("cors");
// const dotenv = require("dotenv");
// const connectDB = require("./config/db");

// dotenv.config();

// const app = express();

// // Middleware
// app.use(cors());
// app.use(express.json());

// // Connect to MongoDB Atlas
// connectDB();

// // Import Routes
// const authRoutes = require("./routes/authRoutes");
// const productRoutes = require("./routes/productRoutes");
// const cartRoutes = require("./routes/cartRoutes");

// // Route Middlewares
// app.use("/api/auth", authRoutes);
// app.use("/api/products", productRoutes);
// app.use("/api/cart", cartRoutes);

// // Default route (optional)
// app.get("/", (req, res) => {
//   res.send("Green Basket Backend is Running...");
// });

// // Server start
// const PORT = process.env.PORT || 5002;
// app.listen(PORT, () => {
//   console.log(`Server running on http://localhost:${PORT}`);
// });










// // const express = require("express");
// // const mongoose = require("mongoose");
// // const cors = require("cors");
// // const jwt = require("jsonwebtoken");
// // const bcrypt = require("bcryptjs");
// // const dotenv = require("dotenv");

// // dotenv.config();

// // const app = express();
// // app.use(cors());
// // app.use(express.json());

// // // Import Files
// // const User = require("./models/User");
// // const authMiddleware = require("./middleware/authMiddleware");

// // // Import Routes
// // const authRoutes = require("./routes/authRoutes");
// // const productRoutes = require("./routes/productRoutes");
// // const cartRoutes = require("./routes/cartRoutes");

// // //  CONNECT MONGO 
// // mongoose
// //   .connect(process.env.MONGO_URI)   // 🔥 Use Atlas from .env
// //   .then(() => console.log("MongoDB Atlas Connected"))
// //   .catch((err) => console.error("Error connecting Mongo:", err));

// // //  ROUTES  
// // app.use("/api/auth", authRoutes);
// // app.use("/api/products", productRoutes);
// // app.use("/api/cart", cartRoutes);


// // app.post("/api/auth/register", async (req, res) => {
// //   const { name, email, password, role } = req.body;

// //   try {
// //     const existingUser = await User.findOne({ email });
// //     if (existingUser) {
// //       return res.status(400).json({ message: "User already exists" });
// //     }

// //     const hashedPassword = await bcrypt.hash(password, 10);
// //     const user = new User({ name, email, password: hashedPassword, role });

// //     await user.save();

// //     console.log(`New User Registered: ${user.email} Role: ${user.role}`);

// //     res.json({ message: "Registration successful" });
// //   } catch (error) {
// //     console.error("Registration error:", error);
// //     res.status(500).json({ message: "Something went wrong" });
// //   }
// // });


// // app.post("/api/auth/login", async (req, res) => {
// //   const { email, password } = req.body;

// //   try {
// //     const user = await User.findOne({ email });
// //     if (!user) return res.status(400).json({ message: "User not found" });

// //     const isMatch = await bcrypt.compare(password, user.password);
// //     if (!isMatch)
// //       return res.status(400).json({ message: "Invalid credentials" });

// //     const token = jwt.sign(
// //       { userId: user._id, role: user.role },
// //       process.env.JWT_SECRET,
// //       { expiresIn: "1h" }
// //     );

// //     console.log(`User logged in: ${user.email}, role: ${user.role}`);

// //     res.json({ token, role: user.role });
// //   } catch (error) {
// //     console.error("Login error:", error);
// //     res.status(500).json({ message: "Something went wrong" });
// //   }
// // });

// // // *************** ROLE-BASED ROUTES *************** //
// // app.get("/api/farmer-data", authMiddleware, (req, res) => {
// //   if (req.user.role !== "Farmer")
// //     return res.status(403).json({ message: "Forbidden" });

// //   res.json({ message: "Welcome Farmer!", userId: req.user.userId });
// // });

// // app.get("/api/consumer-data", authMiddleware, (req, res) => {
// //   if (req.user.role !== "Consumer")
// //     return res.status(403).json({ message: "Forbidden" });

// //   res.json({ message: "Welcome Consumer!", userId: req.user.userId });
// // });


// // const PORT = process.env.PORT || 5002;
// // app.listen(PORT, () =>
// //   console.log(`Server running on http://localhost:${PORT}`)
// // );
