const Host = require("../models/Host");
const { validationResult } = require("express-validator");

exports.createHost = async (req, res) => {
  // Check for errors
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    // Create a new host
    const host = new Host(req.body);
    host.save();
    res.json(host);
  } catch (error) {
    console.log(error);
    res.status(500).send("There was an error");
  }
};

exports.getAllHost = async (req, res) => {
  // check the errors
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  // get all the hosts
  try {
    const allHost = await Host.find();
    res.json({ allHost });
  } catch (error) {
    console.log(error);
    res.status(500).send("There was an error");
  }
};

exports.getHostById = async (req, res) => {
  // check the errors
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  // get the host by id
  try {
    const host = await Host.findById(req.params.id);
    res.json({ host });
  } catch (error) {
    console.log(error);
    res.status(500).send("There was an error");
  }
};
