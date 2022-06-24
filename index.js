const conectmongo = require('./conectmongodb');

const express = require('express');
const app = express();
app.use(express.json())


app.get('/', (req, res) => {
    res.send("good job")
})
app.post('/postdata', async (req, res) => {
    let data = await conectmongo();
    let result =await data.insertOne(req.body);

    
    //console.log(data);
     res.send(result)
});
app.put('/', async (req, res) => {

    let resultr = await conectmongo();
     resultr.updateOne(
        {name:"testdata3"},
        { $set:{addres:"614264444445"}}

    )
    console.log("hekkervkebvka kf");


})

app.listen(4000);