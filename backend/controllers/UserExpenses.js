const UserExpense = require("../model/UserExpenses");

exports.addUserExpense = async (req, res) => {
  try {
    const { userId, title, amount } = req.body;
    const expense = new UserExpense({ userId, title, amount });
    await expense.save();
    res.status(201).json(expense);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getUserExpenses = async (req, res) => {
  try {
    const { userId } = req.params;
    const expenses = await UserExpense.find({ userId });
    res.json(expenses);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
