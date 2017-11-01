
const router = require('express').Router()
const {Product} = require('../db/models')

router.get('/', (req, res, next) => {
  Product.findAll()
    .then(products => res.json(products))
    .catch(next);
});

router.get('/:productId', (req, res, next) => {
  Product.findById(req.params.productId)
    .then(foundProduct => {
      res.json(foundProduct);
    })
    .catch(next);
});


module.exports = router