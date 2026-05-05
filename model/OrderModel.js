import { orders, syncLocalStorage } from './db.js';

export class OrderModel {
    static getAll() { return orders; }

    static add(order) {
        orders.push(order);
        syncLocalStorage();
    }

    static getNextId() {
        return "#ORD" + (orders.length + 1001);
    }
}