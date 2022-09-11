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
    res.send(getAll())
});

app.post('/', (req, res) => {
    console.log(req.body);
    create(req.body.task);
    res.sendStatus(200)
});

app.post('/done', (req, res) => {
    done(req.body.id);
    res.sendStatus(200)
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})