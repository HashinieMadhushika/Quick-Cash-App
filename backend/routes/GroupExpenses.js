// routes/GroupExpenses.js
const express = require("express");
const router = express.Router();
const { addGroupExpense, getGroupExpenses, getGroupBalances } = require("../controllers/GroupExpenses");

// Add a group expense
router.post("/expenses", addGroupExpense);

// Get all expenses for a group
router.get("/expenses/:groupId", getGroupExpenses);

// Get balances for a group
router.get("/balances/:groupId", getGroupBalances);

module.exports = router;
