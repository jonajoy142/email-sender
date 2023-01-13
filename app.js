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
        transporter.sendMail(mail_configs,function(error,info){
            if(error){
                console.log(error)
                return reject({message:`An error occured`})
            }
            return resolve({message:`Mail send succesfully`})
        })
    })
}

app.get('/',(req,res)=>{
    sendMail()
    .then(response=>res.send(response.message))
    .catch(error=>res.status(500).send(error.message))
})

app.listen(port,()=>{
    console.log(`Listeneing to port: ${port}`)
})