import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../interfaces/heroe';

@Pipe({
  name: 'ordenar'
})
export class OrdenarPipe implements PipeTransform {

  transform(heroes: Heroe[], ordenarPor: string = 'NOMBRE', tipoOrdenamiento: string = 'ASC' ): Heroe[] {
    console.log('OrdenarPipe==>');

    switch( ordenarPor ){
      case 'NOMBRE':

        return heroes = heroes.sort(
          (a, b) => {
            if(tipoOrdenamiento === 'ASC'){
              if (a.nombre > b.nombre){
                return 1;
              } else if(a.nombre < b.nombre) {
                return -1;
              } else {
                return 0;
              }
            } else if(tipoOrdenamiento === 'DESC') {
              if (a.nombre > b.nombre){
                return -1;
              } else if(a.nombre < b.nombre) {
                return 1;
              } else {
                return 0;
              }
            } else {
              return 0;
            }
          }
        );

      case 'VUELA':

        return heroes = heroes.sort(
          (a, b) => {
            if(tipoOrdenamiento === 'ASC'){
              if (a.vuela > b.vuela){
                return 1;
              } else if(a.vuela < b.vuela) {
                return -1;
              } else {
                return 0;
              }
            } else if(tipoOrdenamiento === 'DESC') {
              if (a.vuela > b.vuela){
                return -1;
              } else if(a.vuela < b.vuela) {
                return 1;
              } else {
                return 0;
              }
            } else {
              return 0;
            }
          }
        );

      case 'COLOR':

        return heroes = heroes.sort(
          (a, b) => {
            if(tipoOrdenamiento === 'ASC'){
              return a.color - b.color
            } else if(tipoOrdenamiento === 'DESC') {
              return b.color - a.color
            } else {
              return 0;
            }
          }
        );

      default:
        return heroes;
    }

    /*
    heroes = heroes.sort(
      (a, b) => {

        if(ordenarPor === 'NOMBRE'){

          if(tipoOrdenamiento === 'ASC'){
            if (a.nombre > b.nombre){
              return 1;
            } else if(a.nombre < b.nombre) {
              return -1;
            } else {
              return 0;
            }
          } else if(tipoOrdenamiento === 'DESC') {
            if (a.nombre > b.nombre){
              return -1;
            } else if(a.nombre < b.nombre) {
              return 1;
            } else {
              return 0;
            }
          } else {
            return 0;
          }

        } else if(ordenarPor === 'VUELA'){

          if(tipoOrdenamiento === 'ASC'){
            if (a.vuela > b.vuela){
              return 1;
            } else if(a.vuela < b.vuela) {
              return -1;
            } else {
              return 0;
            }
          } else if(tipoOrdenamiento === 'DESC') {
            if (a.vuela > b.vuela){
              return -1;
            } else if(a.vuela < b.vuela) {
              return 1;
            } else {
              return 0;
            }
          } else {
            return 0;
          }

        } else {

          if(tipoOrdenamiento === 'ASC'){
            return a.color - b.color
          } else if(tipoOrdenamiento === 'DESC') {
            return b.color - a.color
          } else {
            return 0;
          }

        }

      }
    );

    return heroes;

    */
  }

}
