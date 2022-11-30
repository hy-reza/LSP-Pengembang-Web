const { customers } = require("../models");

exports.getCustomers = async (req, res) => {
  try {
    const Customers = await customers.findAll();
    res.status(200).json({ status: "success", data: Customers });
  } catch (error) {
    res.status(500).json({ status: "error", message: error.message });
  }
};

exports.getCustomerById = async (req, res) => {
  try {
    const customer = await customers.findAll({
      where: {
        id: req.params.id,
      },
    });
    if (!customer)
      throw new Error(`Error: Cannot find customer with id : ${req.params.id}`);
    res.status(200).json({ status: "success", data: customer });
  } catch (error) {
    res.status(500).json({ status: "error", message: error.message });
  }
};

exports.postCustomers = async (req, res) => {
  try {
    const customer = { ...req.body };
    await customers.create(customer);
    res.status(200).json({ status: "success", data: customer });
  } catch (error) {
    res.status(500).json({ status: "error", message: error.message });
  }
};

exports.updateCustomers = async (req, res) => {
  try {
    const findedCustomer = await customers.findByPk(req.params.id);
    if (!findedCustomer)
      throw new Error(`Error: Cannot find customer with id : ${req.params.id}`);
    const updatedCustomer = await findedCustomer.update(req.body);
    res.status(200).json({ status: "success", data: updatedCustomer });
  } catch (error) {
    res.status(500).json({ status: "error", message: error.message });
  }
};

exports.deleteCustomers = async (req, res) => {
  try {
    const findedCustomer = await customers.findByPk(req.params.id);
    if (!findedCustomer)
      throw new Error(`Error: Cannot find customer with id : ${req.params.id}`);
    const deletedCustomer = await findedCustomer.destroy();
    res.status(200).json({ status: "success", data: findedCustomer });
  } catch (error) {
    res.status(500).json({ status: "error", message: error.message });
  }
};
