const mongoose = require("mongoose");


const HotelSchema = new mongoose.Schema({
  Name: {
    type: String,
    required: true,
  },
  
});

module.exports = mongoose.model("Hotel", HotelSchema);