"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class customers extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.transactions, { foreignKey: 'customersId' })
    }
  }
  customers.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
      },
      name: DataTypes.STRING,
      role: {
        type: DataTypes.STRING,
        defaultValue: 'Pelanggan',
      }
    },
    {
      sequelize,
      modelName: "customers",
    }
  );
  return customers;
};
