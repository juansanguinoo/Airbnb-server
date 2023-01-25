const Payment = require("../models/Payment");
const { validationResult } = require("express-validator");

exports.createPayment = async (req, res) => {
  // Check for errors
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    // Create a new payment
    const payment = new Payment(req.body);
    payment.save();
    res.json(payment);
  } catch (error) {
    console.log(error);
    res.status(500).send("There was an error");
  }
};

exports.getPaymentsByUserId = async (req, res) => {
  try {
    const payments = await Payment.find({ userId: req.params.id });
    res.json({ payments });
  } catch (error) {
    console.log(error);
    res.status(500).send("There was an error");
  }
};
