import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export const ConnectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("✅ DB connected successfully");
  } catch (error) {
    console.error("❌ Failed to connect to DB:", error.message);
    process.exit(1); // Exit process with failure
  }
};
