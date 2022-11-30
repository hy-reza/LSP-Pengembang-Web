const router = require("express").Router();
const {
  getCustomers,
  getCustomerById,
  postCustomers,
  updateCustomers,
  deleteCustomers,
} = require("../controllers/CustomersController.js");

router.get("/", getCustomers);
router.get("/:id", getCustomerById);
router.post('/', postCustomers)
router.put('/:id', updateCustomers)
router.delete('/:id', deleteCustomers)

module.exports = router;
