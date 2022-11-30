const { items } = require("../models");

exports.getItems = async (req, res) => {
  try {
    const Items = await items.findAll();
    res.status(200).json({ status: "success", data: Items });
  } catch (error) {
    res.status(500).json({ status: "error", message: error.message });
  }
};

exports.getItemsById = async (req, res) => {
  try {
    const item = await items.findAll({
      where: {
        id: req.params.id,
      },
    });

    if (!item)
    throw new Error(`Error: Cannot find item with id : ${req.params.id}`);
    res.status(200).json({ status: "success", data: item });
  } catch (error) {
    res.status(500).json({ status: "error", message: error.message });
  }
};

exports.postItems = async (req, res) => {
  try {
    const item = { ...req.body };
    await items.create(item);
    res.status(200).json({ status: "success", data: item });
  } catch (error) {
    res.status(500).json({ status: "error", message: error.message });
  }
};

exports.updateItems = async (req, res) => {
  try {
    const findedItem = await items.findByPk(req.params.id);
    if (!findedItem)
      throw new Error(`Error: Cannot find item with id : ${req.params.id}`);
    const updatedItem = await findedItem.update(req.body);
    res.status(200).json({ status: "success", data: updatedItem });
  } catch (error) {
    res.status(500).json({ status: "error", message: error.message });
  }
};

exports.deleteItems = async (req, res) => {
  try {
    const findedItem = await items.findByPk(req.params.id);
    if (!findedItem)
      throw new Error(`Error: Cannot find item with id : ${req.params.id}`);
    const deletedItem = await findedItem.destroy();
    res.status(200).json({ status: "success", data: findedItem });
  } catch (error) {
    res.status(500).json({ status: "error", message: error.message });
  }
};
