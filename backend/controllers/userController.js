import User from "../models/userModel.js";
import bcrypt from "bcryptjs";
import generateTokenAndSetCookie from "../utils/generateToken.js";
const signup = async (req, res) => {
  try {
    const { fullName, username, password, confirmPassword, gender } = req.body;
    if (password !== confirmPassword) {
      return res.status(400).json({ error: "Password doesn't match" });
    }
    const user = await User.findOne({ username });

    if (user) {
      return res.status(400).json({ error: "Username already exists" });
    }
    const salt = await bcrypt.genSalt(10);
    const hasshedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      fullName,
      username,
      password: hasshedPassword,
      gender,
    });
    if (newUser) {
      generateTokenAndSetCookie(newUser._id, res);
      await newUser.save();
      res
        .status(400)
        .json({ data: newUser, message: "User created successfully" });
    } else {
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    console.log("user===", user);
    const isPasswordMatch = await bcrypt.compare(password, user.password || "");
    if (!user || !isPasswordMatch) {
        return res.status(400).json({ error: "Invalid username or password" });
    }

    generateTokenAndSetCookie(user._id, res);
    res.status(200).json({
      _id: user._id,
      fullName: user.fullName,
      username: user.username,
    } );
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const logout = (req, res) => {
	try {
		res.cookie("jwt", "", { maxAge: 0 });
		res.status(200).json({ message: "Logged out successfully" });
	} catch (error) {
		
		res.status(500).json({ error: error.message });
	}
};
export { signup, login ,logout};
