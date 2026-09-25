const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema(
  {
    name: { type: String, required: [true, "Name is required"], trim: true },
    major: { type: String, required: [true, "Major is required"], trim: true },
    score: {
      type: Number,
      min: [0, "Score cannot be less than 0"],
      max: [100, "Score cannot be greater than 100"]
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Student", studentSchema);
