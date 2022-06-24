const conectmongo = require('./conectmongodb');
let mangodb = require("mongodb");


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
app.delete("/:id",async(req, res)=>{
    let result = await conectmongo();
    result.deleteOne(
        {_id: new mangodb.ObjectId(req.params.id)}
    );
    res.send("done")    


});

app.listen(4000);