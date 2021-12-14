// Import modules
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema for moves
const MoveSchema = new Schema({
    table: String, // current situation of the table
    target: String, // target tile of the move
    isActive: {
        type: Boolean,
        default: true
    } // is the move still active
});

// Export model
module.exports = mongoose.model("Move", MoveSchema);
