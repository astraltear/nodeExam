const express = require('express');
const app = express();
const port = 3000;

let posts =[];

app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.get('/', (_, res) => {    res.json(posts);    });

app.post('/posts', (req, res) => {
    const {title} = req.body;
    posts.push( {id:posts.length+1  , title, createDate: Date()  }  );
    res.json({title});
});


app.delete('/posts/:id', (req, res) => {
    const id = parseInt(req.params.id, 10);
    posts = posts.filter(post => post.id !== id);
    res.json({id});
});


app.listen(port, () => {  console.log(`Server is running on http://localhost:${port}`);  });

