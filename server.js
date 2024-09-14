import express  from "express";
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const user=[]

const app=express()
app.use(express.json())

app.post('/usuarios',async (req, res) => {
   await prisma.user.create({
        data:{
            email:req.body.email,
            name:req.body.name,
            age:req.body.age
        }
    })

    res.status(201).json(req.body) 
})

app.get('/usuarios',(req, res)=>{
    res.status(200).json(user)
})

app.listen(5500)











