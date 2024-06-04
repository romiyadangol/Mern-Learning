const express = require('express');
const app = express();

app.use(express.json());

app.get('/',(req,res)=>{
    res.send('Hello World');
})

app.get('/:id',(req,res)=>{
    const params = req.params;
    console.log(params);
    res.send('This is the id of user: '+params.id);
})

app.post('/',(req,res)=>{
    console.log(req.body);
    res.send(`The name of user is ${req.body.name} and the age is ${req.body.age}`);
})

app.listen(8000, ()=> console.log('Server is running on port 8000'));