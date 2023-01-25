const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { validationResult } = require("express-validator");
require("dotenv").config({ path: "variables.env" });

exports.authUser = async (req, res, next) => {
  // Check if there are errors
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  // Search for the user
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (!user) {
    res.status(401).json({ msg: "The user does not exist" });
    return next();
  }

  // Check the password and authenticate the user
  if (bcrypt.compareSync(password, user.password)) {
    // Create JWT
    const token = jwt.sign(
      {
        id: user._id,
        username: user.username,
        email: user.email,
      },
      process.env.SECRET,
      {
        expiresIn: "4h",
      }
    );
    res.json({ token });
  } else {
    res.status(401).json({ msg: "Password incorrect" });
    return next();
  }
};

exports.authenticatedUser = async (req, res, next) => {
  res.json({ user: req.user });
};
