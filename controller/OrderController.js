import { OrderModel } from './ordermodel.js';
import { ItemModel } from './itemmodel.js';

let cart = [];

window.addToCartByName = function(name) {
    const item = ItemModel.getAll().find(i => i.name === name);
    if (item) {
        cart.push({...item});
        renderCart();
    }
};

window.placeOrder = function() {
    if (cart.length === 0) return Swal.fire('Empty', 'Add items to cart first', 'warning');

    const order = {
        id: OrderModel.getNextId(),
        customer: document.getElementById('order-customer-select').value,
        date: new Date().toLocaleDateString(),
        amount: cart.reduce((total, item) => total + item.price, 0),
        items: cart.map(i => i.name).join(', ')
    };

    OrderModel.add(order);
    cart = [];
    renderCart();
    Swal.fire('Done', 'Order Completed Successfully', 'success');
};