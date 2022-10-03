const express = require('express')
const app = express();
const mongoose = require('mongoose');


const PostSchema = mongoose.Schema({
   title:String,
   description:String,
   date:{type:Date, default:Date.now}
})
const Post = mongoose.model('Posts', PostSchema)

app.get('/', (req, res) => {
    const post = new Post({
        title: 'My title ',
        description: 'Post description'
    })
    post.save().then((data)=>res.json(data))
})

mongoose.connect('mongodb+srv://geshtop:g9095398@cluster0.oba3x25.mongodb.net/test', () => {
    console.log('connect to db');
    app.listen(2800, () => {
        console.log('http://localhost:2800')
    });
}
)