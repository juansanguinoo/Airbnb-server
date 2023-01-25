const mongoose = require("mongoose");

const PaymentSchema = mongoose.Schema({
  userId: {
    type: String,
    require: true,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
  hostId: {
    type: String,
    required: true,
  },
  hostName: {
    type: String,
    required: true,
  },
  hostPhoto: {
    type: Array,
    required: true,
  },
  hostDescription: {
    type: String,
    required: true,
  },
  hostPrice: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Payment", PaymentSchema);
