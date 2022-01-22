const express = require('express');

const Product = require("../models/product.model")

const router = express.Router()


router.get("/", async(req, res)=>{
    try{
        const products = await Product.find().lean().exec()
        return res.status(200).send(products)

    } catch (e){
        return res.status(500).send(e.message)
    }          
} )

module.exports = router