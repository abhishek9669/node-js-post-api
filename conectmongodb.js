const {MongoClient} = require("mongodb");

const url = "mongodb://localhost:27017";

const client = new MongoClient(url);

async function coonectmongo(){
    let clint = await client.connect();
    let db = client.db("data");
    let collect = db.collection("node_data");
    // console.log(collect);
    return collect;

}
module.exports = coonectmongo;