import { Component, OnInit } from '@angular/core';
import { Color, Heroe } from '../../interfaces/heroe';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styleUrls: ['./ordenar.component.css']
})
export class OrdenarComponent implements OnInit {

  public bMayusculas: boolean = true;

  public heroes: Heroe[] = [
    {
      nombre: 'Superman',
      vuela: true,
      color: Color.azul
    },
    {
      nombre: 'Batman',
      vuela: false,
      color: Color.negro
    },
    {
      nombre: 'Robin',
      vuela: false,
      color: Color.verde
    },
    {
      nombre: 'Daredevil',
      vuela: false,
      color: Color.rojo
    }
    ,
    {
      nombre: 'Linterna Verde',
      vuela: true,
      color: Color.verdeFosforescente
    }
  ]

  //Boton ordenar
  public ordenarPor: string = 'NOMBRE';
  public tipoOrdenanimiento: string = 'ASC';

  constructor() { }

  ngOnInit(): void {
  }

  public cambiarMaysculas(){
    this.bMayusculas = !this.bMayusculas;
  }

  public btnOrdenar(ordenarPor: string){
    this.ordenarPor = ordenarPor;
    this.tipoOrdenanimiento = this.tipoOrdenanimiento === 'ASC' ? 'DESC' : 'ASC';
  }

}
