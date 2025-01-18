const express = require('express');
const Product = require('../model/Product');

const router = express.Router(); // mini Server

// console.log(router);

router.get('/', async (req, res)=> {
    let allProducts = await Product.find({});
    res.send("Hello world");
})

router.get('/products', async (req, res) => {
    let allProducts = await Product.find();
    console.log(allProducts);
    res.render('index', {allProducts})
})

router.get('/product/new', async (req, res) => {
    res.render('new');
})

router.post('/products', async (req, res) => {
    const {name, price, description} = req.body;
    try {
        const newProduct = new Product({ name, price, description });
        await newProduct.save();
        res.redirect('/products');
    } 
    catch (error) {
        console.error('Error saving product:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
})

router.get('/products/:name', (req, res)=>{
    let {name} = req.params;
    let {naam, price, description} = Product.find({name});
    // console.log(returnedItem);
    res.render('show',{naam, price, description});
})

module.exports = router;
