const mongoose = require("mongoose");

const user = mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  passwordHash: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  tasks: [
    {
      tarea: { type: mongoose.Schema.Types.ObjectId, ref: "Task" },
    },
  ],
  createdAt: {
    type: Date,
    default: new Date(),
  },
  modifiedAt: {
    type: Date,
    default: new Date(),
  },
});

const User = mongoose.model("User", user);

module.exports = User;
