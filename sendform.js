
const express = require('express');
const   sgMail = require('@sendgrid/mail');
require('dotenv').config();
const app = express();


 app.use(express.urlencoded({extended:false}))


//Mail Functionality
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    
const msg = {
to: 'jlrkumarjaddu@gmail.com', // Change to your recipient HR@COMPANY.COM
from: 'lakshman.jaddu@gmail.com', // Change to your verified sender
subject: 'A new contact form has submitted on your website',
//`Name : {outputmsg.Name } , Phone: {outputmsg.Phone}, Email:{outputmsg.Email}, Message:{outputmsg.Message}`,
text: 'Add your data here, also you can ADD html format below: TESTING',

};

sgMail
    .send(msg)
    .then(() => {
    console.log('Email sent Successfully')
    console.log(msg);
    })
    .catch((error) => {
    console.error(error)
    })

