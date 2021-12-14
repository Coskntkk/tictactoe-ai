require("dotenv").config();
const express = require('express');
const mongoose = require('mongoose');
const fs = require('fs');
const Move = require('./Move');

// Set database
const dbUrl = process.env.DB_URL;
//dbUrl = 'mongodb://localhost:27017/tictactoe-db';
mongoose.connect(dbUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
    console.log('Connected to database');
}).catch((error) => {
    console.log('Connection failed: ' + error);
});


const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get("/populate", async (req, res) => {
    try {
        const raw = fs.readFileSync('moves.json', 'utf8');
        const data = JSON.parse(raw);
        const moves = data.moves;
        
        for (let i = 0; i < moves.length; i++) {
            const move = new Move({
                table: moves[i].table,
                target: moves[i].target
            });
            await move.save();
            console.log(`Saved move ${i}/${moves.length}`);
        }

        console.log("Done.");
        res.send("Done.");

    } catch (error) {
        res.send(error);
    }
});

app.get("/reset", async (req, res) => {
    try {
        await Move.updateMany({}, {isActive: true});
        res.status(200).send("Reset successful");
    // If there is an error, return an error
    } catch (error) {
        res.status(500).send(error);
    }
});


app.listen(3000, () => {
    console.log('Server started on port 3000');
});