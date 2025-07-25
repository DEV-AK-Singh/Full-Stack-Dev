const mongoSchema = require('mongoose');

const orderSchema = mongoSchema.Schema({
    userId: {
        type: String,
        required: true
    },
    products: {
        type: Array,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    address: {
        type: Object,
        required: true
    },
    status: {
        type: String,
        default: 'pending'
    }
}, {
    timestamps: true
});

module.exports = mongoSchema.model('Order', orderSchema);