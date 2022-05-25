var express = require('express');
var router = express.Router();
var MongoClient=require('mongodb').MongoClient
/* GET home page. */
router.get('/', function(req, res, next) {

  res.render('index');
});
router.get('/cart',(req,res)=>{
  res.render('cart')
})
router.get('/checkout-1',(req,res)=>{
  res.render('checkout')
})
router.get('/checkout',(req,res)=>{
  res.render('checkout')
})
router.get('/shop',(req,res)=>{
  res.render('shop')
})
router.get('/product-details',(req,res)=>{
  res.render('productdetails')
})
router.post("/submit",(req,res)=>{


})
module.exports = router;
