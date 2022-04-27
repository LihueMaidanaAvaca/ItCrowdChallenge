const { Router } = require('express');
const response = require('../mockups/products.json')
const axios = require ('axios')
const { Product, Brand } = require ('../db')

const router = Router();

const getMockUpInfo = () => {
    
   
    const products = response.map(p=> {
        return {
        id:  p.id,  
        name:  p.name,
        description:  p.description,
        image_url:  p.image_url,
        price:  p.price,
        brand:  p.brand
        
      }
    });
    
    return products
    
};


const getDbInfo = async () => {
    return await Product.findAll({
        include: {
            model: Brand,
            through: {
                attributes: [],
            },
        }
    })
}

const getAllProducts = async () => {

    const dbInfo = await getDbInfo();
    const infoTotal = dbInfo.concat();
    return infoTotal
}

router.get('/products', async (req, res) => {
    
    let productsTotal = await getAllProducts();
    
    res.status(200).send(productsTotal)
    
})

router.get('/brands', async (req, res)=>{
  
    const brands = response.map(product => product.brand)
       
        
            brands.forEach(brand => {
                Brand.findOrCreate({
                    where: { name: brand}
                })
            })
            const allBrands = await Brand.findAll();
            res.send(allBrands);    
        
})


router.get('/products/:id', async (req, res)=>{
    const id= req.params.id;
    const productsTotal = await getAllProducts()
    if(id){
        let productID = await productsTotal.filter(el => el.id == id)
        productID.length?
        res.status(200).json(productID) :
        res.status(404).send('this is not found')
    }
})

router.post('/product', async (req, res) =>{
    let{name,
        description,
        image_url,
        price,
        brand,
        logo_url
    } = req.body
    
    let productCreated = await Product.create({
        name,
        description,
        image_url,
        price,
    })
    
    
    let bDB = await Brand.findOrCreate({
        where: { name : brand, logo_url : logo_url }
    })
    
    productCreated.addBrand(bDB[0]) 
    
    res.json(productCreated)
})

router.post('/brand', async (req, res)=>{
    const newBrand= req.query.name 

    const newDBBrand = await Brand.findOrCreate({
        where: { name: newBrand}
    })
     
    res.send(newDBBrand)


})

router.put('/products/:id', async (req, res) => {
    let {id} = req.params;
    let {name, description, image_url, price}= req.body

    let product = await Product.findByPk(id)
    product.name = name
    product.description = description
    product.image_url = image_url
    product.price = price
    
    await product.save()
     
    res.json(product)
})

router.delete('/products/:id', (req, res, next) => {
    let id = req.params.id;
    try {
        Product.destroy({where: {id: id}});
        res.sendStatus(200);
    } catch (err) {
        next(err);
    }
});

module.exports = router;
