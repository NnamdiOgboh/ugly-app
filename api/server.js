const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const {json} = require('body-parser');
const axios = require('axios');

const app = express();

app.use(cors());
app.use(json());

app.get('/photos', async (req, res) => {
    return res.send({message: 'Hello from server!'});
});

const PORT = 5000;

app.listen(PORT, console.log(`Server is running on port ${PORT}`)) 