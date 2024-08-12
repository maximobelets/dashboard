import express from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import 'dotenv/config'

const app = express();

const port = process.env.PORT;

const generateToken = (user) => {
    const payload = {
        id: user.id,
        email: user.email
    };
      
    const secret = process.env.SECRET_KEY;
    const options = { expiresIn: '1d' };
    
    return jwt.sign(payload, secret, options);
}

app.get('/', (req, res) => {
    res.send('App');
})

app.listen(port, () => {
    console.log(port, 'App')
})