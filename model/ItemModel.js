import { items, syncLocalStorage } from './db.js';

export class ItemModel {
    static getAll() { return items; }

    static add(item) {
        items.push(item);
        syncLocalStorage();
    }

    static delete(index) {
        items.splice(index, 1);
        syncLocalStorage();
    }
}