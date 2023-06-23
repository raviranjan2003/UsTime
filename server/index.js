import express from 'express';
import colors from "colors";
import dotenv from "dotenv";
import connectDB from "./database/db.js";
import bodyParser from 'body-parser';
import cors from 'cors';
import authRoutes from "./routes/authRoutes.js";
connectDB();
dotenv.config();
const app = express();
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(express.static("public"));
const corsOptions = {
  origin: "*",
  credentials: true,
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));
app.use(express.json());

const port = 4000;

app.get('/', (req, res) => {
  res.send("It's up and running!");
});

app.use("/auth", authRoutes);


app.listen(port, () => {
  console.log(`Server is listening on port ${port}!`.red);
});