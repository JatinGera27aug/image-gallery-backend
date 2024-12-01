const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config()

app.use(express.json());
app.set(express.urlencoded({ extended: true }));
const cors = require('cors');
app.use(cors());
const connectDB = require('./config/dbMongo.js');  // provide db url in .env file
connectDB();
app.use(express.static("public/uploads"))  
const sampleRoutes = require('./routes/sampleRoutes.js')
app.use(express.static('public/uploads'))
const PORT = 8000 || process.env.PORT;

app.get('/', (req, res) => res.send('HELLO WORLD'));

app.use('/api',sampleRoutes)

app.listen(PORT, () => {
    console.log("Server is running at http://localhost:8000");
});