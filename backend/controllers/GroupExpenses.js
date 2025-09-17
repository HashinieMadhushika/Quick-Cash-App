
const GroupExpense = require("../model/GroupExpenses");
const Group = require("../model/Group");

exports.addGroupExpense = async (req, res) => {
  try {
    const { groupId, paidBy, title, amount, splitBetween } = req.body;

    // Check if group exists
    const group = await Group.findById(groupId);
    if (!group) return res.status(404).json({ message: "Group not found" });

    const expense = new GroupExpense({ groupId, paidBy, title, amount, splitBetween });
    await expense.save();
    res.status(201).json(expense);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get all expenses for a group
exports.getGroupExpenses = async (req, res) => {
  try {
    const { groupId } = req.params;
    const expenses = await GroupExpense.find({ groupId })
      .populate("paidBy", "username")
      .populate("splitBetween", "username");
    res.json(expenses);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Calculate balances for a group
exports.getGroupBalances = async (req, res) => {
  try {
    const { groupId } = req.params;
    const expenses = await GroupExpense.find({ groupId })
      .populate("paidBy", "username")
      .populate("splitBetween", "username");

    const balances = {}; // { userId: balance }

    // Initialize balances
    expenses.forEach(exp => {
      exp.splitBetween.forEach(member => {
        balances[member._id] = balances[member._id] || 0;
      });
      balances[exp.paidBy._id] = balances[exp.paidBy._id] || 0;
    });

    // Calculate balances
    expenses.forEach(exp => {
      const splitAmount = exp.amount / exp.splitBetween.length;
      exp.splitBetween.forEach(member => {
        if (member._id.toString() === exp.paidBy._id.toString()) {
          balances[member._id] += exp.amount - splitAmount;
        } else {
          balances[member._id] -= splitAmount;
        }
      });
    });

    res.json(balances); // positive = should receive, negative = owes
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
