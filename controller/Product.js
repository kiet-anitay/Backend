const products = require("../model/product");


const getProducts = async (req, res) => {
    try{
        const result =  await products.find();
        res.status(200).json(result)
    }catch(error){
        res.status(500).json({ error: error.message });
    }
}

const getProductsById = async (req, res) => {
    const { id } = req.params
    const result =  await products.find({id});
    res.status(200).json(result)
}

const addProduct = async(req, res) => {
    console.log(req.headers)
    const { name, price } = req.body;
    const newProducts = new products({name, price})
    await newProducts.save();
    res.status(200).json({message: "product added"})
}


const updateProduct = async(req, res) => {
    const id = Number(req.params.id)
    const {name, price} = req.body;
    try {
        const result = await products.findOne({id: id});
        if(!Object.keys(result).length) {
            return res.json({message: "id does not exist"});
        }
        const updated = await products.findOneAndUpdate({id}, {name, price},  { new: true })
        res.json({message: "updated"});
    }catch(error){
        res.status(500).json({ error: error.message });
    }
}

const deleteProduct = async(req,res) => {
    const id = req.params.id
    const result = await products.findOne({id});
    if(!Object.keys(result).length) {
        return res.json({message: "id does not exist"});
    }

    await products.deleteOne({id:result.id})
    res.json({message: "product deleted"});
}

module.exports = {
    getProducts,
    getProductsById,
    addProduct,
    updateProduct,
    addProduct,
    deleteProduct
}