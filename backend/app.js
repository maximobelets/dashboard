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

app.post('/user/newToken', (req, res) => {
    const newToken = generateToken({id: 1, email: 'test@test.test'})

    res.send(newToken)
})

app.get('/', (req, res) => {
    res.send('App');
})

app.listen(port, () => {
    console.log(port, 'App')
})