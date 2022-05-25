const async = require('hbs/lib/async');
var db=require('../config/connection')
module.exports={

    addproduct:(product,callback)=>{

        console.log(product);
        db.get().collection('product').insertOne(product).then((data)=>{
            return(true)
        })
    },
    viewProduct :()=>{
    
        return new Promise(async(resolve,reject)=>{
            let products=await db.get().collection('product').find().toArray()
            resolve(products)
        })
    }
}