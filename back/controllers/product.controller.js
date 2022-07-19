import ProductModel from '../models/product.model.js';

export async function register(req, res) {
    const { name, description, collection, price, sizes, qtyInInventory } = req.body;
    try {
        let newProduct = new ProductModel({
            name : name,
            description : description,
            collection : collection,
            price : price,
            sizes: sizes,
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

export async function getAllProducts(req, res) {
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
    const { name, description, collection, price, sizes, qtyInInventory } = req.body;
    const id = req.params.id;

    try {
        const product = await ProductModel.findById(id);
        if (!product) return res.status(500).send("Product not found");            

        product.name = name && name.trim() !== "" ? name : product.name;
        product.description = description && description.trim() !== "" ? description : product.description;
        product.collection = collection && collection.trim() !== "" ? collection : product.collection;
        product.price = price && price.trim() !== "" ? price : product.price;
        product.sizes = sizes && sizes.trim() !== "" ? sizes : product.sizes;
        product.qtyInInventory = qtyInInventory && qtyInInventory.trim() !== "" ? qtyInInventory : product.qtyInInventory;
        

        const updatedProduct = await product.save();
        return res.status(200).send({updatedProduct});
    } catch(e) {
        console.log(e)
        return res.status(500).send({'error': 'update error'});
    }
};