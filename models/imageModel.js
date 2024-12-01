const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema({
    url:{
        type:String,
    },
    category:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Category"
    }
});

const ImageModel = mongoose.model('Image',imageSchema);
module.exports = ImageModel;