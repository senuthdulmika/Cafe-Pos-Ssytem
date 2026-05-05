export let customers = JSON.parse(localStorage.getItem('CUSTOMERS')) || [{name: 'Walk-in Customer', phone: '0000'}];
export let items = JSON.parse(localStorage.getItem('ITEMS')) || [];
export let orders = JSON.parse(localStorage.getItem('ORDERS')) || [];

export function syncLocalStorage() {
    localStorage.setItem('CUSTOMERS', JSON.stringify(customers));
    localStorage.setItem('ITEMS', JSON.stringify(items));
    localStorage.setItem('ORDERS', JSON.stringify(orders));
}