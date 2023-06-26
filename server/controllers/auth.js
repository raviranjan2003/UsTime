import User from "../models/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const maxAge = 7 * 24 * 60 * 60;
const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: maxAge,
  });
};

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
  const { usernameoremail, password } = req.body;
  try {
    await User.findOne({
      $or: [{ username: usernameoremail }, { email: usernameoremail }],
    }).then(async (user) => {
      if (!user) {
        return res.status(208).json({
          message: "User not found",
        });
      } else {
          const isMatch = await bcrypt.compare(password, user.password);
          if (isMatch) {
            const token = createToken(user._id);
            res.status(200).json({
              token: token,
              userId: user._id,
              expiresIn: maxAge,
            });
          } else {
            res.status(400).json({
              message: "Incorrect password",
            });
          }
      }
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Internal server error",
    });
  }
};

export { Register, Login };
