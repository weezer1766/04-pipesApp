import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-numeros',
  templateUrl: './numeros.component.html',
  styleUrls: ['./numeros.component.css']
})
export class NumerosComponent implements OnInit {

  public ventasNetas: number = 220001231.5678;
  public porcentaje: number = 0.485755;

  constructor() { }

  ngOnInit(): void {
  }

}
