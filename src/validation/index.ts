// Desc: Validation rules for the signup and login forms

/*
* @param {object} product - Product object
* @returns {object} - Object with errors
*/

export const productValidation = (product: {title: string, description: string, imageURL: string, price: string}) => {
    // Return an object with the validation rules
    const errors: { title: string, description: string, imageURL: string, price: string} = {
        title: "",
        description: "",
        imageURL: "",
        price: "",
    };

    const validURL = /^(ftp|http|https):\/\/[^ "]+$/.test(product.imageURL);
    const validPrice = /^\d+(\.\d{1,2})?$/.test(product.price);

    if (!product.title || !product.title.trim()) {
        errors.title = "Title is required";
    } else if (product.title.length < 10  || product.title.length > 55) {
        errors.title = "Title must be between 10 and 55 characters";
    }

    if (!product.description || !product.description.trim()) {
        errors.description = "Description is required";
    } else if (product.description.length < 10  || product.description.length > 900) {
        errors.description = "Description must be between 10 and 900 characters";
    }

    if (!product.imageURL || !product.imageURL.trim()) {
        errors.imageURL = "Image URL is required";
    } else if (!validURL) {
        errors.imageURL = "Image URL is invalid";
    }

    if (!product.price || !product.price.trim()) {
        errors.price = "Price is required";
    } else if (!validPrice || isNaN(+product.price)) {
        errors.price = "Price is invalid";
    }

    return errors;
}