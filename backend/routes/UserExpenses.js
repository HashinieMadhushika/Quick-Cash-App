const express = require("express");
const { addUserExpense, getUserExpenses } = require("../controllers/UserExpenses");
const router = express.Router();

router.post("/", addUserExpense);
router.get("/:userId", getUserExpenses);

module.exports = router;
