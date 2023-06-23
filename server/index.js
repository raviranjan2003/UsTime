import express from 'express';
import colors from "colors";
import dotenv from "dotenv";
import connectDB from "./database/db.js";
import bodyParser from 'body-parser';
connectDB();
dotenv.config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
const port = 4000;

app.get('/', (req, res) => {
  res.send("It's up and running!");
});


app.listen(port, () => {
  console.log(`Server is listening on port ${port}!`.red);
});