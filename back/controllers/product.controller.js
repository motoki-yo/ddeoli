import ProductModel from '../models/product.model.js';

export async function register(req, res) {
    const { name, description, collectionType, price, sizes, qtyInInventory, img } = req.body;
    try {
        let newProduct = new ProductModel({
            name : name,
            description : description,
            collectionType : collectionType,
            price : price,
            sizes: sizes,
            qtyInInventory : qtyInInventory,
            img : img
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
    try {
        const product = await ProductModel.find({  });
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
    const id = req.params.id;
    console.log(req.params.id)
    try {
        const product = await ProductModel.findById(id);
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
    const { name, description, collectionType, price, sizes, qtyInInventory } = req.body;
    console.log(req.body)
    const id = req.params.id;

    try {
        const product = await ProductModel.findById(id);
        if (!product) return res.status(500).send("Product not found");            

        product.name = name;
        product.description = description;
        product.collectionType = collectionType;
        product.price = price;
        product.sizes = sizes;
        product.qtyInInventory = qtyInInventory;
        

        const updatedProduct = await product.save();
        return res.status(200).send({updatedProduct});
    } catch(e) {
        console.log(e)
        return res.status(500).send({'error': 'update error'});
    }
};

export async function remove(req, res) {
    const { _id } = req.body;

    try {
        const count = await ProductModel.findByIdAndDelete(id);
        if (!count) return res.status(500).send("Product not found");            
        window.alert("Delete successful!");
        return res.status(200).send({message: "Delete succesful"});
    } catch(e) {
        window.alert(console.log(e));
        return res.status(500).send({'error': 'delete error'});
    }
};