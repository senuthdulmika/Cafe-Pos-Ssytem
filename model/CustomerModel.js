import { customers, syncLocalStorage } from './db.js';

export class CustomerModel {
    static getAll() { return customers; }

    static add(customer) {
        customers.push(customer);
        syncLocalStorage();
    }

    static delete(index) {
        customers.splice(index, 1);
        syncLocalStorage();
    }

    static search(phone) {
        return customers.find(c => c.phone === phone);
    }
}