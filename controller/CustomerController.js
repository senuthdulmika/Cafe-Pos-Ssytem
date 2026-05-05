import { CustomerModel } from './customermodel.js';
import { validateCustomer } from './regegex_util.js';

window.saveCustomer = function() {
    const name = document.getElementById('cust-name').value;
    const phone = document.getElementById('cust-phone').value;

    const validation = validateCustomer(name, phone);
    if (validation !== true) {
        return Swal.fire('Error', validation, 'error');
    }

    CustomerModel.add({ name, phone });
    Swal.fire('Success', 'Customer Added', 'success');
    renderCustomerTable();
    resetCustForm();
};

window.deleteCustomer = function(index) {
    CustomerModel.delete(index);
    renderCustomerTable();
};