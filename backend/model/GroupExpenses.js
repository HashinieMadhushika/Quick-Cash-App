// models/GroupExpenses.js
const mongoose = require("mongoose");

const groupExpenseSchema = new mongoose.Schema({
  groupId: { type: mongoose.Schema.Types.ObjectId, ref: "Group", required: true },
  paidBy: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  title: { type: String, required: true },
  amount: { type: Number, required: true },
  splitBetween: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }], // members sharing this expense
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model("GroupExpenses", groupExpenseSchema);
