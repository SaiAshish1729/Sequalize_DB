// require('dotenv').config();
require('dotenv').config({ path: `${process.cwd()}/.env` });
const express = require('express');
const authRouter = require('./routes/authRoute');
const app = express();
const PORT = process.env.APP_PORT || 4000;

app.use(express.json());

app.get("/", (req, res) => {
    res.json({ message: "Welcome to the API!" });
});

// app.use("*", (req, res) => {
//     res.status(404).json({ message: 'Route not found' });
// });


app.use('/api/v1/auth/', authRouter);


app.listen(PORT, () => {
    console.log('Server up and running', PORT);
});