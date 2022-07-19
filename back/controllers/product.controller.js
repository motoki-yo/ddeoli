import ProductModel from '../models/product.model.js';

export async function register(req, res) {
    const { name, description, group, price, qtyInInventory } = req.body;
    try {
        let newProduct = new ProductModel({
            name : name,
            description : description,
            group : group,
            price : price,
            qtyInInventory : qtyInInventory
        });

        const createdProduct = newProduct.save()
        if(createdProduct) {
            return res.status(200).send(createdProduct);
        }
    } catch(e) {
        console.log(e)
        return res.status(500).send({'error': 'register error'});
    }
};

export async function getProduct(req, res) {
    const { id } = req.params.id;
    try {
        const product = await ProductModel.findOne({ id });
        if(!product) { 
            return res.status(500).send({'error': 'Product not found'});
        }

        return res.status(200).send({product});
    } catch(e) {
        console.log(e)
        return res.status(500).send({'error': 'get error'});
    }
};

export async function update(req, res) {
    const { name, description, group, price, qtyInInventory } = req.body;
    const id = req.params.id;

    try {
        const product = await ProductModel.findById(id);
        if (!product) return res.status(500).send("Product not found");            

        product.name = name && name.trim() !== "" ? name : product.name;
        product.description = description && description.trim() !== "" ? description : product.description;
        product.group = group && group.trim() !== "" ? group : product.group;
        product.price = price && price.trim() !== "" ? price : product.price;
        product.qtyInInventory = qtyInInventory && qtyInInventory.trim() !== "" ? qtyInInventory : product.qtyInInventory;

        const updatedProduct = await product.save();
        return res.status(200).send({updatedProduct});
    } catch(e) {
        console.log(e)
        return res.status(500).send({'error': 'update error'});
    }
};