import mongoose from "mongoose";
import dotenv from "dotenv";
import colors from "colors";

dotenv.config();
mongoose.set("strictQuery", false);
const connectDB = () => {
  mongoose
    .connect("mongodb://127.0.0.1:27017/ustime", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((res) => console.log("Connected to MongoDB".bgBlue))
    .catch((err) => console.log(err));
};

export default connectDB;
