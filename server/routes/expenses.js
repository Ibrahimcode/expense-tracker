var express = require("express");
var router = express.Router();
// const sequenceGenerator = require("./sequenceGenerator");
const Expense = require("../models/expense");

router.get("/", (req, res, next) => {
  Expense.find().exec(function (err, expenses) {
    if (err) {
      console.log(err);
      return res.status(500).json({
        message: err,
      });
    }
    console.log("Expenses rendered");
    return res.status(200).json({
      message: "Expenses fetched successfully;",
      expenses: expenses,
    });
  });
});

router.post("/", (req, res, next) => {
  // const maxDocumentId = sequenceGenerator.nextId("documents");

  const expense = new Expense({
    id: req.body.id,
    lastModified: req.body.lastModified,

    date: req.body.date,

    expenditure1: req.body.expenditure1,
    cost1: req.body.cost1,

    expenditure2: req.body.expenditure2,
    cost2: req.body.cost2,

    expenditure3: req.body.expenditure3,
    cost3: req.body.cost3,

    expenditure4: req.body.expenditure4,
    cost4: req.body.cost4,

    expenditure5: req.body.expenditure5,
    cost5: req.body.cost5,
  });

  expense
    .save()
    .then((createdExpense) => {
      res.status(201).json({
        message: "Expense added successfully",
        expense: createdExpense,
      });
    })
    .catch((error) => {
      res.status(500).json({
        message: "An error occurred",
        error: error,
      });
    });
});

router.put("/:id", (req, res, next) => {
  Expense.findOne({ id: req.params.id })
    .then((expense) => {
      expense.lastModified = req.body.lastModified;

      expense.date = req.body.date;

      expense.expenditure1 = req.body.expenditure1;
      expense.cost1 = req.body.cost1;

      expense.expenditure2 = req.body.expenditure2;
      expense.cost2 = req.body.cost2;

      expense.expenditure3 = req.body.expenditure3;
      expense.cost3 = req.body.cost3;

      expense.expenditure4 = req.body.expenditure4;
      expense.cost4 = req.body.cost4;

      expense.expenditure5 = req.body.expenditure5;
      expense.cost5 = req.body.cost5;

      Expense.updateOne({ id: req.params.id }, expense)
        .then((result) => {
          res.status(204).json({
            message: "Expense  updated successfully",
          });
        })
        .catch((error) => {
          res.status(500).json({
            message: "An error occurred",
            error: error,
          });
        });
    })
    .catch((error) => {
      res.status(500).json({
        message: "Expense not found.",
        error: { expense: "Expense not found" },
      });
    });
});

router.delete("/:id", (req, res, next) => {
  Expense.findOne({ id: req.params.id })
    .then((expense) => {
      Expense.deleteOne({ id: req.params.id })
        .then((result) => {
          res.status(204).json({
            message: "Expense deleted successfully",
          });
        })
        .catch((error) => {
          res.status(500).json({
            message: "An error occurred",
            error: error,
          });
        });
    })
    .catch((error) => {
      res.status(500).json({
        message: "Expense not found.",
        error: { expense: "Expense not found" },
      });
    });
});

module.exports = router;
