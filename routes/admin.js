var express = require('express');
const res = require('express/lib/response');
var router = express.Router();
var MongoClient=require('mongodb').MongoClient

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.redirect('/min/add-p');
});
router.get('/add-p',(req,res)=>{
  res.render('admin/add_product')
})
router.post('/add-p',(req,res)=>{
  MongoClient.connect("mongodb://localhost:27017",(err,client)=>{
    if(err){
      console.log(err);
    }else{
      client.db("hijas").collection("product").insertOne(req.body)
    }
  })
  console.log(req.body);
  res.redirect('min/view-product')
})
router.get('/view-product',(req,res)=>{
  var data
  MongoClient.connect("mongodb://localhost:27017",async(err,client)=>{
    if(err){
      console.log("EEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEe");
      console.log(err);
    }else{
      let data =await client.db("hijas").collection("product").find()
      console.log(data);
      return data
    }
  })
  // console.log(data);
  res.render('admin/view-product',{data})
})
module.exports = router;
