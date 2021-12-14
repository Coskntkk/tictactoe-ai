const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const moveSchema = new Schema({
    table: String,
    target: String,
    isActive: {
        type: Boolean,
        default: true
    }
});


module.exports = mongoose.model('Move', moveSchema);