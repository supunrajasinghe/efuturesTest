const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const productCategorySchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: { 
        type: String,
    },
});

module.exports = mongoose.model('product_category', productCategorySchema);
