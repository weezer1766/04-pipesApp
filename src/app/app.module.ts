import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimeNGModule } from './prime-ng/prime-ng.module';
import { SharedModule } from './shared/shared.module';
import { VentasModule } from './ventas/ventas.module';

//CONFIGURACIÓN DE LOCALIZATION i18n - ESPAÑOL
import { LOCALE_ID } from '@angular/core';

import localeEs from '@angular/common/locales/es';
import localeEsHN from '@angular/common/locales/es-HN';
import localeEsPE from '@angular/common/locales/es-PE';
import localeFr from '@angular/common/locales/fr';

import { registerLocaleData } from '@angular/common';
registerLocaleData(localeEs, 'es');
registerLocaleData(localeEsHN, 'es-HN');
registerLocaleData(localeEsPE, 'es-PE');
registerLocaleData(localeFr, 'fr');
//CONFIGURACIÓN DE LOCALIZATION i18n - ESPAÑOL

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    PrimeNGModule,
    SharedModule,
    VentasModule
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'es-PE'}, //Este provider permite cambiar el valor de la constante LOCATE_ID a español
                                          //con la finalidad de poder aplicar el formate en las vistas mediante PIPES "|"
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
