import express from 'express';
import {create, done, getAll} from './apis/items.js'
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
    const items = create(req.body.task)
    res.send(items);
});

app.post('/done', (req, res) => {
    console.log(req);
    res.send(done(req.body.id));
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})