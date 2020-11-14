const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
    },
    price: {
        type: String,
    },
    status: {
        type: String,
        default: "A"
    },
    launch_date: {
        type: String,
        default: new Date()
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: 'product_category'
    }
});

module.exports = mongoose.model('product', productSchema);
