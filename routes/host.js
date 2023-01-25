const express = require("express");
const router = express.Router();
const hostController = require("../controllers/hostController");

// Create Host
router.post("/", hostController.createHost);

// Get all Hosts
router.get("/", hostController.getAllHost);

// Get Host by Id
router.get("/:id", hostController.getHostById);

module.exports = router;
