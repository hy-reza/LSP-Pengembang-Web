'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class transactions extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.customers, {foreignKey: 'customersId'})
      this.belongsTo(models.items, {foreignKey: 'itemsId'})
    }
  }
  transactions.init({
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    customersId: DataTypes.UUID,
    itemsId: DataTypes.UUID,
    amounts: {
      defaultValue: "999999",
      type :DataTypes.STRING
    },
    status: {
      type: DataTypes.STRING,
      defaultValue: "unpayed", 
    }
  }, {
    sequelize,
    modelName: 'transactions',
  });
  return transactions;
};