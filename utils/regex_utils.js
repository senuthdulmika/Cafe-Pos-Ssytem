export function validateCustomer(name, phone) {
    const nameRegex = /^[A-Za-z ]{3,30}$/;
    const phoneRegex = /^(07[01245678][0-9]{7})$/;

    if (!nameRegex.test(name)) return "Invalid Name (3-30 letters required)";
    if (!phoneRegex.test(phone)) return "Invalid Sri Lankan Phone Number";
    return true;
}

export function validateItem(price) {
    if (price <= 0 || isNaN(price)) return "Price must be a positive number";
    return true;
}