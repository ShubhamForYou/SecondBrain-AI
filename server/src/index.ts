import express from "express";
import "dotenv/config";
import { connectDB } from "./config/db.js";
const app = express();
import routes from "./routes/index.route.js";
// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1", routes);
const PORT = process.env.PORT || 7000;
const startServer = async () => {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log("Server is running 🟢");
      console.log(`http://localhost:${PORT} `);
    });
  } catch (error) {
    console.log(error);
  }
};
startServer();
