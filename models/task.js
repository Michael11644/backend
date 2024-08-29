'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Task extends Model {
    static associate(models) {
      // Define the relationship between Task and Employee
      Task.belongsTo(models.Employee, { foreignKey: 'employeeId', as: 'employee' });
    }
  }
  Task.init({
    content: DataTypes.STRING,
    priority: DataTypes.INTEGER,
    completed: DataTypes.BOOLEAN,
    employeeId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Employees',
        key: 'id'
      },
      onDelete: 'SET NULL',
      onUpdate: 'CASCADE'
    }
  }, {
    sequelize,
    modelName: 'Task',
  });
  return Task;
};
