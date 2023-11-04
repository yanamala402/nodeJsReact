var express = require('express');
var cors = require('cors');
var mongodb=require('mongodb');

var app=express();
var client=mongodb.MongoClient;

app.use(cors({origin:'*'}));
app.use(express.json());



app.get('/',(req,res)=>{
    client.connect("mongodb+srv://heros:dE5AWrRzyjqHdhWy@cluster0.gh1z6o0.mongodb.net/pavankumar?retryWrites=true&w=majority")
    .then((conn)=>{
        console.log('ppp')
        var db=conn.db('pavankumar');
        db.collection('kumar').find().toArray()
        .then((result)=>{
            res.send(result);
        })
        .catch((err)=>{
            console.log(err)
        })
    })
    .catch((err)=>{
        console.log(err)
    })
})

const port = process.env.PORT || 8080
app.listen(port, () => {
    console.log(`Server Up in Port ${port}`);
})