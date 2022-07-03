import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public nombre = 'ronald raICo';

  public mostrarNombre(): void{
    console.log(this.nombre);
  }

}
