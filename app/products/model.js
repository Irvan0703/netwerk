const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    name:{
        type:String,
        required:[true, 'field harus ada'],
        minlength:3,
        maxlength:50
    },
    description:{
        type:String,
        required:[true, 'field harus ada'],
        minlength:3,
        maxlength:1000
    },
    price:{
        type:Number,
        required:true,
        minlength: 1000,
        maxlength: 100000000
    },
});

const Product = mongoose.model('product', productSchema);
module.exports = Product;