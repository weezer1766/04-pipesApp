import { Component, OnInit } from '@angular/core';
import { interval, tap } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styleUrls: ['./no-comunes.component.css']
})
export class NoComunesComponent implements OnInit {
  // i18nSelect
  public nombre: string = 'Ronald'
  public genero: string = 'masculino';
  public inviteMap: any = {'masculino': 'invitarlo', 'femenino': 'invitarla', 'other': 'invitarle'};

  public loading: boolean = false;

  // i18nPlural
  clientes: string[] = ['Ronald', 'Juana', 'Carmín', 'Pedro', 'Hebert'];
  clientesMapa = {
    '=0': 'no tenemos ningún cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    //'other': `tenemos ${this.clientes.length} clientes esperando.`
    'other': 'tenemos # clientes esperando.'
  }

  //slice
  public numero: number = 12303020.4242

  //KeyValue Pipe
  persona = {
    nombre: 'Fernando',
    edad: 35,
    direccion: 'Ottawa, Canada'
  }

  //JsonPipe
  heroes = [
    {
      nombre: "Superman",
      vuela: true
    },
    {
      nombre: "Batman",
      vuela: false
    },
    {
      nombre: "Aquaman",
      vuela: false
    },
  ];

  //Async Pipe
  public miObservable = interval(5000).pipe( tap(() => console.log('interval')) );

  public valorPromesa = new Promise( (resolve, reject) =>{
    setTimeout(() => {
      resolve('Tenemos datos de la promesa')
    }, 3500);
  });

  constructor() { }

  ngOnInit(): void {
  }

  public cambiarPersona(): void{
    this.loading = true;
    this.nombre = (this.nombre == 'Ronald') ? 'Carmín' : 'Ronald';
    this.genero = (this.genero == 'masculino') ? 'femenino': 'masculino';
    this.loading = false;
  }

  public borrarCliente(): void{
    this.loading = true;
    this.clientes.shift();
    this.loading = false;
  }

  public restaurarCliente(): void{
    this.clientes = ['Ronald', 'Juana', 'Carmín', 'Pedro', 'Hebert'];
  }

}
