import express from 'express';
// todo-3.1: import the module function we just exported
import {done, getAll} from './apis/items.js'
import cors from "cors";

const app = express();
const port = 3001;
app.use(express.json());
app.use(cors({
    origin: 'http://localhost:3000'
}));

app.get('/', (req, res) => {
    res.send(getAll());
});

app.post('/', (req, res) => {
    // todo-3.2: use the module we just exported,
    // hint: use the variable items to keep return value of the create method
    const items = {id: '12345', task: 'remove me'}
    res.send(items);
});

app.post('/done', (req, res) => {
    console.log(req);
    res.send(done(req.body.id));
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})