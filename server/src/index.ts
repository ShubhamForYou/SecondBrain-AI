import express from "express";
import "dotenv/config";
import { connectDB } from "./config/db.js";
import cors from "cors";
const app = express();
import routes from "./routes/index.route.js";
// middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1", routes);
const PORT = process.env.PORT || 7000;
const startServer = async () => {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log("Server is running 🟢");
      console.log(
        `http://localhost:${PORT}/api/v1 \n http://localhost:7001/api/v1`
      );
    });
  } catch (error) {
    console.log(error);
  }
};
startServer();
