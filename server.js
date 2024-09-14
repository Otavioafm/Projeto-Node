import express  from "express";


const user=[]

const app=express()
app.use(express.json())

app.post('/usuarios',(req, res)=>{
    user.push(req.body)
    res.send("Ok,Post")
    res.status(2001).json(req.body)
})

app.get('/usuarios',(req, res)=>{
    res.status(200).json(user)
})

app.listen(5500)











