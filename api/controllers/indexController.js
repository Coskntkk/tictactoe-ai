// Import model
const Move = require('../models/Move');

exports.index = async (req, res) => {
    try {
        res.status(200).sendFile(__dirname, '../index.html');
    } catch (error) {
        res.status(500).send({
            message: error.message
        });
    }
};

// Send ready signal from backend to start the game
exports.ready = async (req, res) => {
    try {
        res.status(200).send("Ready");
    } catch (error) {
        res.status(500).send(error);
    }
}

// Get all moves with given table
exports.getMove = async (req, res) => {
    try {
        let table = req.params.table;
        let movesList = await Move.find({table: table, isActive: true});
        res.status(200).send(movesList);
    // If there is an error, return an error
    } catch (error) {
        res.status(500).send(error);
    }
}

// Set isActive property of given table and target to false
exports.deleteMove = async (req, res) => {
    try {
        let table = req.params.table;
        // Turn table 90, 180, 270 degrees
        let table90 = [table[6], table[3], table[0], table[7], table[4], table[1], table[8], table[5], table[2]].join('');
        let table180 = [table[8], table[7], table[6], table[5], table[4], table[3], table[2], table[1], table[0]].join('');
        let table270 = [table[2], table[5], table[8], table[1], table[4], table[7], table[0], table[3], table[6]].join('');
        let tableDegs = [table, table90, table180, table270];

        let target = req.params.target;
        // Turn target 90, 180, 270 degrees
        let targetInt = parseInt(target);
        let target90 = targetInt + [2, 4, 6, -2, 0, 2, -6, -4, -2][targetInt];
        let target180 = targetInt + ((4 - targetInt) * 2);
        let target270 = targetInt + [6, 2, -2, 4, 0, -4, 2, -2, -6][targetInt];
        let targetDegs = [target.toString(), target90.toString(), target180.toString(), target270.toString()];

        for (var i=0; i<4; i++) {
            let tableToDel = tableDegs[i];
            let targetToDel = targetDegs[i];
            await Move.findOneAndUpdate({table: tableToDel, target: targetToDel}, {isActive: false});
        }
        res.status(200).send("delete successful");
    // If there is an error, return an error
    } catch (error) {
        res.status(500).send(error);
    }
}
