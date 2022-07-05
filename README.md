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

# INSTALACION DE PRIMEFLEX

Usaremos la versión 3 en lugar de la 2, en caso de necesitarse la versión anterior utilizar el siguiente comando:

npm install primeflex --> Última versión
npm install primeflex@2.0.0 --> Versión 2.0.0

# INSTALACIÓN TABLE DE PRIME NG

Para utilizar el componente table dentro de nuestra aplicación debemos instalar el siguiente paqueta:
npm install @angular/cdk --save

En caso de que salga algún error se deberá tratar de instalar una versión anterior en este caso la que encontre fue:
https://snyk.io/vuln/npm:%40angular%2Fcdk --> VERSIONES DEL CDK

npm install @angular/cdk@13.3.9
npm install @angular/cdk@11.0.7 --> LA VERSION INSTALADA EN EL CURSO NO USAR!!!

# APUNTES
1. En el currency pipe utilizar la siguiente página para saber el currencyCode:
https://en.wikipedia.org/wiki/ISO_4217

2. Cuando se imprime directamente un objeto en el HTML como por ejemplo un array sin asociarlo directamente
a ninguna directiva como el ngFor, Angular asume que solo se quiere mostrar el contenido de dicho array y 
si se manipula dicho objeto desde otros controles simplemente no se refrezca el resultado que se esta mostrando
en pantalla: 

<pre>{{clientes}}</pre>

3. En el slice pipe el primer número que marca el "start" es incluyente es decir que el objeto encontrado
se incluye en el resultado que se va a devolver, y el segundo número es decir el "end" es excluyente,
es decir no se va a mostrar en el resultado, por esta razón si aun arreglo le colocamos lo siguiente:

slice:3:3 => Aquí el resultado sería vacio ya que estamos diciendo que empiece en el objeto de posición
3, y que llegue hasta el mismo y como el fin es excluyente no se muestra nada en el resultado.

4. El Json Pipe tiene una limitación, la cúal consiste en que si se quiere imprimir un objeto que contiene
métodos, ya sean que calculen o impriman atributos del mismo objeto, entonces aparecerá un error de Angular
que indicará que el objeto es muy complejo para ser mostrado.

5. El AsyncPipe, desenvuelve el valor primitivo de una tarea asincrona. El objeto que se pasará a este pipe
debe ser un observable o una promesa, ya que lo que hace el AsynPipe es suscribirse internamente al observable
y cada una de sus emisiones es lo que se imprime en pantalla.

En el caso de realizar un async a un observable, cada vez que se invoque la sentencia "(miObservable | async)"
el pipe se esta suscribiendo por cada invocación al observable, es decir se esta instanciando por cada llamada,
mientras que cuando el async se realiza sobre una promesa esta se asocia a dicha promesa una sola vez.

6. Si se quiere crear una copia de un arreglo en el HTML se puede utilizar el slice:0 por ejemplo:

<p-table [value]="heroes | slice:0" responsiveLayout="scroll">
