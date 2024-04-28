const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
app.use(cors())

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

app.get("/login", cors(), (req, res)=>{})
app.post("/login",async(req, res)=>{
    const{email, password}= req.body

    try{
        const check=await User.findOne({email:email})
        if (check){
            res.json("exist")
        }
        else {
            res.json("notexist")
        }

    }
    catch(e){
        res.json("notexist")

    }

})

app.post("/register",async(req, res)=>{
    const{email, password, name}= req.body
    const data={
        email:email,
        password:password,
        name:name
    }

    try{
        const check=await User.findOne({email:email})
        if (check){
            res.json("exist")
        }
        else {
            res.json("notexist")
            await User.insertMany({data})
        }

    }
    catch(e){
        res.json("notexist")

    }

})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});