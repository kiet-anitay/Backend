const mongoose = require("mongoose");
const _ = require("lodash")

const productSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
        default: () => _.uniqueId(),
        index: {unique: true}
    },
    name: {
        type: String,
        default: null,
        require: true
    },
    price: {
        type: Number,
        default: 10
    }
});

const products = mongoose.model("products", productSchema);
module.exports = products;