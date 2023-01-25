const mongoose = require("mongoose");

const HostSchema = mongoose.Schema({
  anfitrion: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  date: {
    type: Date,
    default: Date.now(),
  },
  title: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  typeGroup: {
    type: String,
    required: true,
  },
  privacyType: {
    type: String,
    required: true,
  },
  location: {
    type: Object,
    required: true,
  },
  floorPlan: {
    type: Object,
    required: true,
  },
  photos: {
    type: Array,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Host", HostSchema);
