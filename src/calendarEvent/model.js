const { sequelize, DataTypes } = require('../db');

module.exports = sequelize.define('CalendarEvents', {
  title: { type: DataTypes.STRING, allowNull: false },
  start: { type: DataTypes.DATE, allowNull: false },
  end: { type: DataTypes.DATE, allowNull: false },
});
