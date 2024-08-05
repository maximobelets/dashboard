import express from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import 'dotenv/config'

const app = express();

const port = process.env.PORT;

app.get('/', (req, res) => {
    res.send('App');
})

app.listen(port, () => {
    console.log(port, 'App')
})