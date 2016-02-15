//dependencies
var express=require('express');
var router=express.Router();

//Models
var product=require('../models/product');

//routes
product.methods(['get','put','patch','post','delete']);
product.register(router,'/products');

//Return router
module.exports=router; 