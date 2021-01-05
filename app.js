const express = require('express');
const cors = require('cors');
const app = express();
const {startDatabase} = require('./database/mongo');
const {insertLoginDetails} = require('./database/mongoquery');

const PORT = 3000;

// enabling CORS for all requests
app.use(cors());
app.use(express.json());

// Routes
app.use(require('./routes'));

startDatabase();
  
app.listen(PORT, ()=> {
    console.log(`App is listening at ${PORT}`);
});