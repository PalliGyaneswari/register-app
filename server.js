const express=require('express');
const cors=require('cors');
const app=express();
const mysql=require('mysql2');



app.use(cors());
app.use(express.json());

const db=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'Gyane@18',
    database:'register'
})
db.connect((err)=>{
    if (err){
        console.log("databasae errroe");
        return
    }
    console.log("database connected");
})

app.post('/name',(req,res)=>{
    const {name,email,password}=req.body;
    const sql="insert into register(username,email,password) values(?,?,?)";
    db.query(sql,[name,email,password],(err,result)=>{
        if (err){
        console.log(error);
    }
    console.log("added succesfully");
    res.json("user registeres succesfully");

    })

})

app.listen(3000,()=>{
    console.log("server is working")
})