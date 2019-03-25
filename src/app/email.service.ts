import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor() { }
/*
  sendEmail(mail){

var email 	= require("./path/to/emailjs/email");
var server 	= email.server.connect({
   user:    "gastonveliez95", 
   password:"lunaton95", 
   host:    "smtp.gmail.com", 
   ssl:     true
});
 
// send the message and get a callback with an error or details of the message that was sent
server.send({
   text:    mail.mensaje, 
   from:    mail.email, 
   to:      "gastonveliez95@gmail.com",
   cc:      "",
   subject: mail.asunto
}, function(err, message) { console.log(err || message); }); 
  }*/
}
