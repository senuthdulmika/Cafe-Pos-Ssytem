import { ItemModel } from './itemmodel.js';
import { validateItem } from './regegex_util.js';

window.saveFoodItem = function() {
    const name = document.getElementById('item-name-select').value;
    const cat = document.getElementById('item-cat').value;
    const price = parseFloat(document.getElementById('item-price').value);

    const validation = validateItem(price);
    if (validation !== true) return Swal.fire('Error', validation, 'error');

    ItemModel.add({ name, cat, price });
    renderFoodTable();
    resetFoodForm();
};