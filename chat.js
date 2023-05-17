const http=require('http')

const express=require('express');

const app=express();

app.use((req,res,next)=>{
console.log('next1')
next()
})

app.use((req,res,next)=>{
    console.log('next2')
   
    })


const server=http.createServer(app)         


server.listen(3000);