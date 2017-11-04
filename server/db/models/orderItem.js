const db = require('../db')
const Sequelize = require('sequelize')

const OrderItem = db.define('orderItem', {
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  productId: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  quantity: {
    type: Sequelize.INTEGER,
  },
  price: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  }
})

module.exports = OrderItem
