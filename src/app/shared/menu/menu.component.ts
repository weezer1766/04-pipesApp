import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  public items!: MenuItem[];

  constructor() { }

  ngOnInit(): void {
    //<a [routerLink]="['/routePath']" routerLinkActive="router-link-active" ></a>
    this.items = [
      {
          label: 'Pipes de Angular',
          icon: 'pi pi-desktop',
          items: [
            {
              label: 'Textos y Fechas',
              icon: 'pi pi-align-left',
              routerLink: ' '
            },
            {
              label: 'Números',
              icon: 'pi pi-dollar',
              routerLink: 'numeros'
            },
            {
              label: 'No comunes',
              icon: 'pi pi-globe',
              routerLink: 'no-comunes'
            }
          ]
          //routerLink: `/no-comunes/${1}`,
          //queryParams: {['id']: 1, ['nombre']: 'nombre'}
      },
      {
          label: 'Pipes personalizados',
          icon: 'pi pi-cog',
          routerLink: 'ordenar'
      }
    ];

  }

}
