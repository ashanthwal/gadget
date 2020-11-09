import express from "express";
import dotenv from "dotenv";
import { errorHandler, notFound } from "./middleware/errorMiddleware.js";

import connectDB from "./config/db.js";
import productRoutes from "./routes/productRoutes.js";

const app = express();
dotenv.config();

connectDB();
app.get("/", (req, res) => {
  res.send("Api is connected");
});

app.use("/api/products", productRoutes);

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(5000, console.log("server running on port 5000"));
