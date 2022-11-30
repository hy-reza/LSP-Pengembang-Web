const router = require("express").Router();
const {getItems, getItemsById, postItems, updateItems, deleteItems} = require("../controllers/itemsController.js");

router.get('/', getItems)
router.get('/:id', getItemsById)
router.post('/', postItems)
router.put('/:id', updateItems)
router.delete('/:id', deleteItems)

module.exports = router