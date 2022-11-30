const router = require("express").Router();
const {getTransactions, getTransactionsById, postTransactions, payTransactions, cancelTransactions} = require("../controllers/TransactionsController.js");

router.get('/', getTransactions)
// router.get('/:id', getTransactionsById)
router.post('/', postTransactions)
router.put('/:id', payTransactions)
router.delete('/:id', cancelTransactions)

module.exports = router