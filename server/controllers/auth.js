import User from "../models/user.js";
import bcrypt from "bcrypt";

const Register = async (req, res) => {
  const { username, name, email, password } = req.body;
  try {
    await User.findOne({ email }).then((user) => {
      if (user) {
        return res.status(400).json({
          message: "User already exists",
        });
      }
    });
    await User.findOne({ username }).then((user) => {
      if (user) {
        return res.status(400).json({
          message: "Username already exists",
        });
      }
    });
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      username,
      name,
      email,
      password: hashedPassword,
    });
    await newUser.save();
    res.status(200).json({
      message: "User registered successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Internal server error",
    });
  }
};

const Login = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const user = await User.findOne({
      $or: [{ username: username }, { email: email }],
    });
    if (user) {
      const isMatch = await bcrypt.compare(password, user.password);
      if (isMatch) {
        res.status(200).json({
          message: "Login successful",
          user,
        });
      } else {
        res.status(400).json({
          message: "Incorrect password",
        });
      }
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Internal server error",
    });
  }
};

export { Register, Login };
