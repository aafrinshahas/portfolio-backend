const express = require('express');
const cors = require('cors')
const mongoose = require('mongoose');
require('dotenv').config()
const port = process.env.PORT;

const DataModel = require('./models/data')
const app = express();
app.use(cors())
app.use(express.json())
app.use(cors())
app.use(express.urlencoded({extended: true}))

//Database

mongoose.connect(process.env.MONGO_URL)
.then(()=>{console.log('database connected')})
.catch(()=>{console.log('connection error')})



app.post('/contactform', (req, res)=>{
    const name = req.body.name;
    const email = req.body.email;
    const message = req.body.message

    const newData = new DataModel(
        {
            name: name,
            email: email,
            message: message
        }
    );

    newData.save().then(()=>console.log('saved successfully'))
})


app.listen(port, ()=>{
    console.log('server started')
})