const conectmongo = require('./conectmongodb');


const express = require('express');
const app = express();
app.use(express.json())



app.put('/:name', async (req, res) => {
    // console.log("first")

    let resultr = await conectmongo();
    let data = await resultr.updateOne(
        {name:req.params.name},
        {$set:req.body}

    )
    // console.log("hekkervkebvka kf");
    res.send(data);


})

app.listen(4000);