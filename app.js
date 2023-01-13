const { text } = require('express');
const express  = require('express')
const nodemailer = require('nodemailer')
const app = express();
const port = 5000

function sendMail(){

    return new Promise((resolve,reject)=>{
        var transporter = nodemailer.createTransport({
            service:'gmail',
            auth:{
                user:'',
                pass:''
            }
        })
        const mail_configs = {
            from:'',
            to:'',
            subject:'Testing code for sending mail!',
            text:"Hai peter,This is a Sample mail to test coding!."
        }
        
    })
}

app.listen(port,()=>{
    console.log(`Listeneing to port: ${port}`)
})