import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.css']
})
export class BasicosComponent implements OnInit {

  public nombreLower: string = 'fernando';
  public nombreUpper: string = 'FERNANDO';
  public nombreCompleto: string = 'fErNando herRera';

  public fecha: Date = new Date(); //el día de hoy

  constructor() { }

  ngOnInit(): void {
  }

}
