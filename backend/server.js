require('dotenv').config()
const express =require('express')
const engine=require('./controller.js')
const app=express()

app.use(express.json())
app.get('/healthcheck',(req,res)=>{
    res.status(200).send
    (
        {
        status: 200,
        message: 'Success',
        }
    )
})
app.get('/shorten',async (req,res)=>{
    if(!(req.query &&req.query.hash)){
        res.status(400).send("Failed")  
        return
    } 
    // route page to that url
    const sReqHash=req.query.hash
    let sResURL=""
    sResURL=await engine.getLongURL(sReqHash)
    res.send(sResURL)
})

app.post('/shorten',async(req,res)=>{
    
    if(!(req.body &&req.body.url)){
        res.status(400).send("Failed")  
        return
    } 
    const sReqUrl=req.body.url
    let sResHash=await engine.shortenURL(sReqUrl)
    res.send(sResHash)
})
app.get('/:sHash',async(req,res)=>{
    const sReqHash=req.params.sHash
    let sResURL=""
    sResURL=await engine.getLongURL(sReqHash)
    res.redirect(sResURL)
})




app.listen(process.env.SERVER_PORT,()=>{
    console.log(`Server started at http://${process.env.HOST}:${process.env.SERVER_PORT}`)})