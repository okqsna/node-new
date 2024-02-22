const express=require('express');
const mongoose=require('mongoose');
const app=express();
const Book=require('./models/bookModel');
require('dotenv').config();
const mnKey=process.env.MONGO_KEY;
const port=process.env.PORT;
app.use(express.json())

app.get('/books', async(req,res)=>{
    try{
        const books=await Book.find({});
        res.status(200).json(books)
    }catch(error){
        res.status(500).json({message:error.message})
    }
})
app.get('/books/:id', async(req,res)=>{
    try{
        const {id}=req.params;
        const book=await Book.findById(id);
        res.status(200).json(book)
    }catch(error){
        res.status(500).json({message:error.message})
    }
})
app.post('/book', async(req,res)=>{
    try{
        const book=await Book.create(req.body);
        res.status(200).json(book);
    }catch (error){
        console.log(error.message);
        res.status(500).json({message:error.message})
    }
    console.log(req.body)
    res.send(req.body)
})

mongoose.connect(mnKey).then(()=>{
    app.listen(port, ()=>{
        console.log('node api app is running')
    })
    console.log("connected to mongo")
}).catch((error)=>{
    console.log(error);
})