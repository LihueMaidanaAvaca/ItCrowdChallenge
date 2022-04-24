const { Router } = require('express');
const response = require('../mockups/products.json')
const axios = require ('axios')
const { Product, Brand } = require ('../db')
// const products = require ('./mockups/products.json')

const router = Router();

const getMockUpInfo = () => {
    
   
    const products = response.map(p=> {
        return {
          id: p.id,  
          name: p.name,
          description: p.description,
          image_url: p.image_url,
          price: p.price,
          brand: p.brand
        }
      })
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
    const mockUpInfo = await getMockUpInfo();
    const dbInfo = await getDbInfo();
    const infoTotal = dbInfo.concat(mockUpInfo);
    return infoTotal
}

router.get('/products', async (req, res) => {
    const name = req.query.name
    
    let productsTotal = await getAllProducts();
    if(name){
        
        let productTitle = await productsTotal.filter(product => product.title.toLowerCase().includes(name.toLowerCase()))
        
        productTitle.length ?
        res.status(200).send(productTitle) :
        res.status(404).send('error')
    } else{
        res.status(200).send(productsTotal)
    }
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

router.post('/brand', async (req, res)=>{
    const newBrand= req.query.name 

    const newDBBrand = await Brand.findOrCreate({
        where: { name: newBrand}
    })
     
    res.send(newDBBrand)


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
    let{
        name,
        description,
        image_url,
        price,
        brand
    } = req.body

    let productCreated = await Recipe.create({
        name,
        description,
        image_url,
        price,
    })
    
    brand.map(async b=> {
        let bDB = await Brand.findOrCreate({
            where: { name : b}
        })
        
    productCreated.addBrand( bDB[0]) })
    
    res.json(productCreated)
})


module.exports = router;
