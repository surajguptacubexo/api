const express= require('express');
const mongoose= require('mongoose');
const bodyParser = require('body-parser')
const cors =require('cors')
const app=express();

app.use(cors())
const url= "mongodb://localhost:27017/test";
mongoose.connect(url,{useNewUrlParser: true});
const student= require('./student')
const con= mongoose.connection;
app.use(bodyParser.urlencoded())
app.use(express.json());
try{
    con.on('open',() => {
        console.log('connected');
    })
}catch(error)
{
    console.log("Error: "+error);
}
const port=9000;
app.listen(port, () =>{
    console.log('Server started');
})
app.get("/", function (req, res) {
  res.send("Hello")

})

app.get("/student", function (req, res) {
    student.find({},(err,data) => {
        if (err) return {err}
        res.send(data)
    })
})
app.get("/student/:id",cors(), function (req,res){
    student.findOne({'_id': req.params.id.toString()}, (err, data) => {
        if (err) {return err}
        res.send(data)
    })
})
app.delete("/stddel/:id",cors(),function (req,res){

    const id = req.params.id.toString();
    student.remove({
        _id: id
    }, function(err){
        if (err) {
            console.log(err)
        }
        else {
           return res.send("Removed");
        }
    });
    })
app.put("/stdput/:id",function (req, res){
    res.send("put")
})

app.post("/student",cors(),function (req,res){

    const prod = new student({
    name : req.body.name,
    roll : req.body.roll,
    registration : req.body.registration,
    subjects : req.body.subjects,
    registered_on : req.body.registered_on
})

    prod.save(function(err,result){
    if (err){
       return res.send(err)
    }
    else{
       return res.send({status:200,id:prod._id})
    }
})
})