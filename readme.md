# Aplicación de Facturación

## Preparando nuestro proyecto

    Recursos:
        - https://adminlte.io/ (https://adminlte.io/themes/AdminLTE/index2.html)

1. Ir al primer recurso y descargar el tema gratuito de bootstrap (2.3.2)
    - Dirigirse a la siguiente url `http://localhost:8080/angularjs/AJS-Facturacion`
    - Ver si todo funciona correctamente

2. Limpiar el proyecto y mantener los siguientes directorios y ficheros:
    - bootstrap
    - buid
    - dist
    - documentation
    - index2.html
    - index.html
    - pages
    - plugins
    - readme.md
    - readme_yo.md
    - starter.html

3. Modificar el nombre del fichero `index.html` a `index3.html`

4. Modificar el nombre del fichero `starter.html` a `index.html`

5. Modificar el skin del index de azul a morado
    - `skin-purple`

6. Crear el directorio `angular/lib` en el proyecto y descargar los siguientes ficheros:
    - `angular.min.js.map`
    - `angular-route.min.js.map`
    - Añadir las referencias en el index

7. Crear el fichero `app.js` y añadir la referencia en el index
    - Crear el modulo y el controlador
    - Añadir las directivas `ng-app` y `ng-controller`

8. Eliminar la lista de tareas ya que no la usaremos (index)

9. Eliminar `Control Sidebar Toggle Button` ya que tampoco se usara (index)

10. Eliminar `Control Sidebar` ya que tampoco se usara (index)

## Preparando nuestro proyecto - Parte 2

1. Crear el directorio `template` dentro del proyecto

2. Crear el fichero `mensajes.html`

3. Usar la directiva  `ng-include` para llamar al template `mensajes.html`
    - `ng-include="'template/mensajes.html'"`

4. Crear el fichero `notificaciones.html`

5. Usar la directiva  `ng-include` para llamar al template `notificaciones.html`
    - `ng-include="'template/notificaciones.html'"`

6. Crear el fichero `usuario.html`

7. Usar la directiva  `ng-include` para llamar al template `usuario.html`
    - `ng-include="'template/usuario.html'"`

8. Crear el fichero `menu.html`

9. Usar la directiva  `ng-include` para llamar al template `menu.html`
    - `ng-include="'template/menu.html'"`

10. Colocar el `breadcrumb` dentro del `Main content`
    - Despues, comentar el `breadcrumb`

11. El `Main content` es la seccion que cambiara, usando nuestro enrutador
    - Añadir a directiva `ng-view` en `Main content`

12. Crear el directorio `dashboard` dentro del proyecto
    - Crear el fichero `dashboard.html`
    - Coloar el `breadcrumb` el el fichero creado

13. Crear el enrutamiento en el archivo `angular/app.js`
    - Codear la ruta por defecto, que apunte a `dashboard.html`

14. Crear un fichero de configuracion de tipo .json en la raiz
    - Se llamara `configuracion.json`

## Preparando nuestro proyecto - Parte 3

1. Hacer un servicio para que lea el archivo de configuracion
    - Crear el directorio `angular/servicios`
    - Crear el fichero `configuracion_service.js`
    - Añadir la referencia en el fichero `index.html`
    - Inyectar el servicio `facturacionApp.configuracion` en el modulo principal `app.js`

2. Configurar el servicio para que devuelva una promesa
    - Asignar el resultado a una variable llamada `config`

3. Crear el filtro `quitarletra`

4. Reemplazar los datos del fichero configuraciones.json en el index
