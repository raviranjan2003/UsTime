import express from 'express';
import colors from "colors";
import dotenv from "dotenv";
import connectDB from "./database/db.js";
connectDB();
dotenv.config();

const app = express();
const port = 4000;

app.get('/', (req, res) => {
  res.send("It's up and running!");
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}!`.red);
});