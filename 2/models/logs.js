module.exports = (sequelize, DataTypes) => {
  const Logs = sequelize.define('Logs', {
    endpoint: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    date: {
      type: 'TIMESTAMP',
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
    },
    params: {
      type: DataTypes.STRING,
    },
  })
  return Logs
}
