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
  MongoClient.connect("mongodb://localhost:27017",(err,client)=>{
    if(err){
      console.log(err);
    }else{
      client.db("hijas").collection("user").insertOne(req.body)
    }
  })

})
module.exports = router;
