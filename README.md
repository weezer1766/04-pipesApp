## 04PipesApp

# TECNOLOGIAS A UTILIZAR

PIPES DE ANGULAR Y PERSONALIZADOS
https://angular.io/api?query=pipe

PRIME NG
https://www.primefaces.org/primeng/table/edit

# INSTALACION DE PRIME NG

1. Ejecutamos los siguientes comandos que instalan los modulos de PRIME NG y los 
iconos del mismo:

npm install primeng --save
npm install primeicons --save

Sin embargo debido a que la última versión de PRIME NG es la 14.0.0-rc.1 y esta utiliza la versión 14 del 
@angular/commons, se debe instalar la versión previa del PRIME NG la cual es la versión 13.4.1

npm install primeng@13.4.1
npm install primeicons

No es necesario colocar el --save, ya que los comandos lo van a instalar como las dependencias del proyecto
actual.

2. Configuramos los estilos en el archivo angular.json:

"node_modules/primeng/resources/themes/vela-blue/theme.css",
"node_modules/primeng/resources/primeng.min.css",
"node_modules/primeicons/primeicons.css"

3. Con esto ya estamos listos para usar PRIME NG en el proyecto si queremos un módulo en particular solo debemos
importarlo en el "app.module.ts", por ejemplo:

import { ButtonModule } from 'primeng/button';

imports: [
  ...
  ButtonModule
],
