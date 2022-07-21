import OrderModel from '../models/order.model.js';

export async function register(req, res) {
    const { userEmail, items, totalPrice, orderAddress} = req.body;
    try {
        let newOrder = new OrderModel({
            userEmail : userEmail,
            items : items,
            totalPrice : totalPrice,
            orderAddress: orderAddress
        });

        const createdOrder = newOrder.save()
        if(createdOrder) {
            return res.status(200).send(createdOrder);
        }
    } catch(e) {
        console.log(e)
        return res.status(500).send({'error': 'order register error'});
    }
};

// load all orders by user id
export async function getAllOrders(req, res) {
    try {
        const orders = await OrderModel.find({});
        if (!orders) return res.status(500).send("orders not found");            

        return res.status(200).send(orders);
    } catch(e) {
        console.log(e)
        return res.status(500).send({'error': 'find error'});
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
        return res.status(500).send({'error': 'order get error'});
    }
};

export async function remove(req, res) {
    const id = req.body;

    try {
        const count = await OrderModel.findByIdAndDelete(id);
        if (!count) return res.status(500).send("Order not found");            

        return res.status(200).send({message: "Delete succesful"});
    } catch(e) {
        console.log(e)
        return res.status(500).send({'error': 'delete error'});
    }
};