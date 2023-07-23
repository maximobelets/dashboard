import express from 'express';

const app = express();

const port = 7001;

app.get('/', (req, res) => {
    res.send('App');
})

app.listen(port, () => {
    console.log('App')
})