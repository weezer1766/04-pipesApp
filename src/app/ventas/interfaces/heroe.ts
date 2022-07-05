export enum Color {
  rojo = 0,
  negro = 1,
  azul = 2,
  verde = 3,
  verdeFosforescente = 33
}

export interface Heroe {

  nombre: string,
  vuela: boolean,
  color: Color

}
