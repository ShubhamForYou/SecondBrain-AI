import mongoose, { type MongooseBaseQueryOptionKeys } from "mongoose";
import "dotenv/config";

const DB_URI = process.env.DB_URI;

export const connectDB = async () => {
  await mongoose
    .connect(DB_URI as string)
    .then(() => {
      console.log("DB CONNECTED 🟢");
    })
    .catch((err) => {
      console.log("DB CONNECTION ERROR 🔴", err);
    });
};
