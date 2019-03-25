import { Component, OnInit } from '@angular/core';
import { EmailService } from '../email.service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  formulario = {asunto:'',mensaje:''};

  constructor(private emailServ: EmailService) { }

  ngOnInit() {
  }

  onSubmit(){
    window.open('mailto:gastonveliez95@gmail.com?subject='+this.formulario.asunto+'&body=' + this.formulario.mensaje);

    //this.emailServ.sendEmail(this.formulario);
  }

}
