var express = require('express');
const res = require('express/lib/response');
var router = express.Router();
var MongoClient=require('mongodb').MongoClient
var producthelper=require('../helpers/producthelper')
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.redirect('/min/add-p');
});
router.get('/add-p',(req,res)=>{
  res.render('admin/add_product')
})
router.post('/add-p',(req,res)=>{

  
  producthelper.addproduct(req.body,()=>{

  })
  res.redirect('view-product')
})
router.get('/view-product',async(req,res)=>{
  producthelper.viewProduct().then((products)=>{
    console.log(products);
    res.render('admin/view-product',{products})
  })
})
module.exports = router;
