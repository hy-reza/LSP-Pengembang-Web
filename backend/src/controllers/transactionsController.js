const { transactions, items } = require("../models");

exports.getTransactions = async (req, res) => {
  try {
    const Transactions = await transactions.findAll({
      include: {
        all: true,
      },
    });
    res.status(200).json({ status: "success", data: Transactions });
  } catch (error) {
    res.status(500).json({ status: "error", message: error.message });
  }
};

exports.postTransactions = async (req, res) => {
  try {
    const item = await items.findByPk(req.body.itemsId);
    const trns = await transactions.create( { ...req.body, amounts: item.price });
    res.status(200).json({ status: "success", data: trns });
  } catch (error) {
    res.status(500).json({ status: "error", message: error.message });
  }
};
;

exports.payTransactions = async (req, res) => {
  try {
    const findedTransaction = await transactions.findByPk(req.params.id);
    if (!findedTransaction)
      throw new Error(`Error: Cannot find transaction with id : ${req.params.id}`);
    const updatedTransaction = await findedTransaction.update({...findedTransaction, status: "payed"});
    res.status(200).json({ status: "success", data: updatedTransaction });
  } catch (error) {
    res.status(500).json({ status: "error", message: error.message });
  }
};
exports.cancelTransactions = async (req, res) => {
  try {
    const findedTransaction = await transactions.findByPk(req.params.id);
    if (!findedTransaction)
      throw new Error(`Error: Cannot find transaction with id : ${req.params.id}`);
    const updatedTransaction = await findedTransaction.update({...findedTransaction, status: "canceled"});
    res.status(200).json({ status: "success", data: updatedTransaction });
  } catch (error) {
    res.status(500).json({ status: "error", message: error.message });
  }
};

