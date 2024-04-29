const express = require("express");
const mongoose = require("mongoose");
const app = express();
const axios = require("axios");
const cors = require("cors");
app.use(express.json());
app.use(cors());
require('dotenv').config();

const connection = process.env.MONGO_URI;
const PORT = process.env.PORT
const apiKey = process.env.APIKEY;

async function initializeFetch() {
    let fetch;

    try {
        const fetchModule = await import('node-fetch');

        fetch = fetchModule.default || fetchModule;
    } catch (err) {
        console.error('Error importing node-fetch:', err);
    }

}

initializeFetch();

mongoose.connect(connection, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB');
}).catch((err) => {
    console.error('Error connecting to MongoDB:', err);
});

const User = require("./models/Models");

/*
app.get("/login", cors(), (req, res)=>{})
app.post("/login", async (req, res) => {
    const { email, password } = req.body;

    try {
        const check = await User.findOne({ email: email });
        if (check) {
            res.json("exist");
        } else {
            res.json("notexist");
        }
    } catch (e) {
        console.error(e);
        res.status(500).json({ error: "Server error" });
    }
});

app.post("/register", async (req, res) => {
    const { email, password, name } = req.body;
    
    try {
        const existingUser = await User.findOne({ email });
        
        if (existingUser) {
            return res.json("User already exists");
        }

        const newUser = new User({ email, password, name });
        await newUser.save();
        res.json("User created successfully");
    } catch (error) {
        console.error("Error registering user:", error);
        res.status(500).json({ error: "Server error" });
    }
});
*/

const bcrypt = require('bcrypt');
const saltRounds = 10;

app.post("/register", async (req, res) => {
    const { email, password, name } = req.body;
    
    try {
        const existingUser = await User.findOne({ email });
        
        if (existingUser) {
            return res.status(400).json("User already exists");
        }

        const hashedPassword = await bcrypt.hash(password, saltRounds);

        const newUser = new User({ email, password: hashedPassword, name });
        await newUser.save();
        res.json("User created successfully");
    } catch (error) {
        console.error("Error registering user:", error);
        res.status(500).json({ error: "Server error" });
    }
});

app.post("/login", async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(401).json("User not found");
        }

        const passwordMatch = await bcrypt.compare(password, user.password);

        if (passwordMatch) {
            res.json({
                _id: user._id,
                email: user.email,
                name: user.name
            });
        } else {
            res.status(401).json("Incorrect password");
        }
    } catch (error) {
        console.error("Error logging in:", error);
        res.status(500).json({ error: "Server error" });
    }
});

app.get('/results/:city', async (req, res) => {
    const city = req.params.city;
    const searchQuery = `recycle centers in ${city}`;
    const url = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${searchQuery}&key=${apiKey}`;

    console.log('URL:', url);

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        if (data.status === 'OK') {
            const recycleCenters = data.results.map(center => ({
                name: center.name,
                location: center.formatted_address
            }));
            res.json({ recycleCenters });
        } else {
            res.json({ message: 'No recycle centers found.' });
        }
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
