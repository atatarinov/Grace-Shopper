const User = require('./user')

const Product = require('./product');
// const Category = require('./category')
// const Review = require('./review');
// // const Order = require('./order')
//
// Product.hasMany(Review);
// Order.hasMany(Product)
// Order.belongsTo(User)
// Product.hasMany(Category)
// Category.hasMany(Product);
// Product.belongsToMany(Order, {as: OrderItemId});
//
// Review.belongsTo(Product);
// Review.belongsTo(User, {as: 'author'});


/**
 * If we had any associations to make, this would be a great place to put them!
 * ex. if we had another model called BlogPost, we might say:
 *
 *    BlogPost.belongsTo(User)
 */

/**
 * We'll export all of our models here, so that any time a module needs a model,
 * we can just require it from 'db/models'
 * for example, we can say: const {User} = require('../db/models')
 * instead of: const User = require('../db/models/user')
 */

module.exports = {
  // User,
  // Order,
  // Category,
  Product
}
