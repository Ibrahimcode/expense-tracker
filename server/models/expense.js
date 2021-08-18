const mongoose = require("mongoose");

const expenseSchema = mongoose.Schema({
  id: { type: String, required: true },
  lastModified: { type: Date, required: true },
  date: { type: String },

  expenditure1: { type: String },
  cost1: { type: String },

  expenditure2: { type: String },
  cost2: { type: String },

  expenditure3: { type: String },
  cost3: { type: String },

  expenditure4: { type: String },
  cost4: { type: String },

  expenditure5: { type: String },
  cost5: { type: String },
});

module.exports = mongoose.model("Expense", expenseSchema);
