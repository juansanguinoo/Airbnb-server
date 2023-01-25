const express = require("express");
const router = express.Router();
const paymentController = require("../controllers/paymentController");

// Create Payment
router.post("/", paymentController.createPayment);

// Get Payments by User Id
router.get("/:id", paymentController.getPaymentsByUserId);

module.exports = router;
