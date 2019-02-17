import express from 'express';
import dotenv from 'dotenv';
import "@babel/polyfill";
import CommentWithJsObject from './src/usingJSObject/controllers/Comment';
import CommentWithDB from './src/usingDB/controllers/Comment';

dotenv.config();
const Comment = process.env.TYPE === 'db' ? CommentWithDB : CommentWithJsObject
const app = express()

app.use(express.json())

app.get('/', (req, res) => {
    return res.status(200).json({'message': 'YAT! Congratulation hello world test tesat'})
})


app.post('/api/v1/comments', Comment.create);
app.get('/api/v1/comments', Comment.getAll);
app.get('/api/v1/comments/:id', Comment.getOne);
app.put('/api/v1/comments/:id', Comment.update);
app.delete('/api/v1/comments/:id', Comment.delete);

app.listen(3000)
console.log('app running on port', 3000)