import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portfolio';

  constructor(private router : Router){}

  proyectos(){
    this.router.navigate(["/proyectos"]);
  }

  contacto(){
    this.router.navigate(["/contacto"]);
  }
}
