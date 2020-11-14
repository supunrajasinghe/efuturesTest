const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const productCommentSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    created_at: {
        type: String,
        default: new Date()
    },
    product_id: {
        type: Schema.Types.ObjectId,
        ref: 'Product'
    }
});

module.exports = mongoose.model('product_comment', productCommentSchema);
