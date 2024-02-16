const express= require('express')
const cors=require('cors')
const fs=require("fs");
const configureDB=require('./config/database')
const routes=require('./config/routes')

const port=3003
const app= express()
app.use(cors())
configureDB()

app.use('/',routes)


app.listen(()=>{
    console.log("server Running  on Port ",port)
})

