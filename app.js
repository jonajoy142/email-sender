const express  = require('express')
const nodemailer = require('nodemailer')
const app = express();
const port = 5000



app.listen(port,()=>{
    console.log(`Listeneing to port: ${port}`)
})