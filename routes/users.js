const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const { check } = require("express-validator");

router.post(
  "/",
  [
    check("username", "Username is required").not().isEmpty(),
    check("email", "Add a valid email").isEmail(),
    check("password", "The password must be at least 8 characters").isLength({
      min: 8,
    }),
  ],
  userController.createUser
);

module.exports = router;
