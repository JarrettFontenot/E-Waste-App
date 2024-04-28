const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
app.use(cors())
app.use(express.json());

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

const User = require("./models/Models");

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


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});