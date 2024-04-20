const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
app.use(cors)

require('dotenv').config();

const connection = process.env.MONGO_URI;
const PORT = process.env.PORT

mongoose.connect(connection, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB');
}).catch((err) => {
    console.error('Error connecting to MongoDB:', err);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});