// Constant values
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

require('dotenv').config();
// Set port
const port = process.env.PORT || 9000;

// Initialize express
const app = express();
app.use(cors());

// Import routes
const indexRouter = require('./routes/indexRoute');

// Mongoose Configuration
const dbUrl = process.env.DB_URL;
// dbUrl = 'mongodb://localhost:27017/tictactoe-db';
mongoose.connect(dbUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log("DB Connected.");
});

// Middlewares
app.use(express.static(__dirname + "/public"));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// Routes
app.use('/', indexRouter);

// Start server
app.listen(port, () => {
    console.log('Example app listening on port 9000!');
});
