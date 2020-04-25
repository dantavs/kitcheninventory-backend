const express = require('express')

const routes = express.Router()

const CategoryController = require('./controllers/CategoryController')
const ProductController = require('./controllers/ProductController')

routes.get('/', function (req,res){
    res.send("Hello World")
})

routes.post('/categories', CategoryController.create)
routes.get('/categories', CategoryController.index)

routes.post('/products', ProductController.create)
routes.get('/products', ProductController.index)
routes.put('/products', ProductController.update)
routes.delete('/products/:id', ProductController.delete)

routes.get('/productDetail/:id', ProductController.select)

module.exports = routes