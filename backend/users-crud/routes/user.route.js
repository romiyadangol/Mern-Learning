const { v4: uuidv4 } = require('uuid');

const express = require("express");
const router = express.Router();
let mockData = [];
//user/ => get
router.get('/', (req,res)=>{
    res.send(mockData);
});
//user/ => post
router.post('/', (req,res)=>{
    const payload = req.body;
    const id =  uuidv4();
    payload.id = id;
    mockData.push({id, ...payload});
    res.send("New user added");
});

module.exports = router;