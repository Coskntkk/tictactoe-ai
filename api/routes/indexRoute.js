// Import modules
const exporess = require('express');
const router = exporess.Router();
const indexController = require('../controllers/indexController');

//// Set routes
router.get('/', indexController.index);

// Get ready signal from backend to start the game
router.get("/ready", indexController.ready);

// GET /:table to get all moves with given table
router.get("/moves/:table", indexController.getMove);

// GET /:table/:target to disable given move
router.get("/moves/:table/:target", indexController.deleteMove);


// Export router
module.exports = router;