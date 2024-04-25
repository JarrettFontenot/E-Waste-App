const express = require("express");
const mongoose = require("mongoose");
const app = express();
const axios = require("axios");
const apiKey = 'AIzaSyCgBNTsF-x4fuML0e4CLJvlxyVKx-Cre0c';
const cors = require("cors");
app.use(cors());
require('dotenv').config();

const connection = process.env.MONGO_URI;
const PORT = process.env.PORT

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
