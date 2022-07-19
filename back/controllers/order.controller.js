import OrderModel from '../models/order.model.js';

export async function register(req, res) {
    const { dateInvoice, userEmail,  items, totalPrice} = req.body;
    try {
        let newOrder = new OrderModel({
            dateInvoice : dateInvoice,
            userEmail : userEmail,
            items : items,
            totalPrice : totalPrice,
        });

        const createdOrder = newOrder.save()
        if(createdOrder) {
            return res.status(200).send(createdOrder);
        }
    } catch(e) {
        console.log(e)
        return res.status(500).send({'error': 'register error'});
    }
};

export async function getOrder(req, res) {
    const { id } = req.params.id;
    try {
        const order = await OrderModel.findOne({ id });
        if(!order) { 
            return res.status(500).send({'error': 'Order not found'});
        }

        return res.status(200).send({order});
    } catch(e) {
        console.log(e)
        return res.status(500).send({'error': 'get error'});
    }
};

/* Não vamos implementar UPDATE, só deletar o Pedido mesmo. Comprou errado faz de novo, querido. */
// export async function update(req, res) {
//     const { name, description, collection, price, qtyInInventory } = req.body;
//     const id = req.params.id;

//     try {
//         const order = await OrderModel.findById(id);
//         if (!order) return res.status(500).send("Product not found");            

//         order.name = name && name.trim() !== "" ? name : order.name;
//         order.description = description && description.trim() !== "" ? description : order.description;
//         order.collection = collection && collection.trim() !== "" ? collection : order.collection;
//         order.price = price && price.trim() !== "" ? price : order.price;
//         order.qtyInInventory = qtyInInventory && qtyInInventory.trim() !== "" ? qtyInInventory : order.qtyInInventory;

//         const updatedProduct = await order.save();
//         return res.status(200).send({updatedProduct});
//     } catch(e) {
//         console.log(e)
//         return res.status(500).send({'error': 'update error'});
//     }
// };