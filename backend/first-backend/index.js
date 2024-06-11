const express = require('express');
const app = express();

app.get('/', (req,res) => {
    res.send('Hello world!');
});

app.get('/user', (req,res) => {
    res.json(
        [
            {
                name:'Romiya',
                age:'22',
                isEmployed:'Noooooooooo!'
            },
            {
                name:'Anjan',
                age:'20',
                isEmployed:'Yessssssss!'
            }
        ]
    )
});
app.get('/dog-facts',(req,res) => {
    res.json({
        "dog_facts": [
            {
              "fact": "Dogs have a sense of time. They can predict future events, such as regular walk times."
            },
          ]
    })
})



app.listen(8000, () => console.log("Server is running!!"));



