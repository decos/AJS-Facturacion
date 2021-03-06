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

## Lógica de las notificaciones

1. Crear el fichero `mensajes_service.js` (Arreglo de objetos `mensajes`)
     - Codear el nuevo servicio
     - Añadir la referencia en el fichero `index.html`
     - Inyectar el servicio `facturacionApp.mensajes` en el modulo principal `app.js`

2. Codear el fichero `mensajes.html`
     - Añadir la directiva `ng-src`

3. Crear el filtro `mensajecorto` y usarlo en la descripcion de los mensajes

4. Crear el fichero `notificaciones_service.js` (Arreglo de objetos `mensajes`)
     - Codear el nuevo servicio
     - Añadir la referencia en el fichero `index.html`
     - Inyectar el servicio `facturacionApp.notificaciones` en el modulo principal `app.js`

5. Codear el fichero `notificaciones.html`

## Clientes - Parte 1

1. Crear el directoio `php`
    - Crear el fichero `clases`
    - Copiar dentro del directorio anterior el fichero `class.Database.php`
    - Configurar el acceso a la base de datos

2. Añadir el archivo `animate.css` en el directorio `dist/css`

3. Crear una base de datos con cotejamiento `utf8_spanish_ci`
    - Ejecutar el script de base de datos

## Clientes - Parte 2

1. Añadir el estilo personalizado `animate.css` al `index.html`

2. Crear el directorio `clientes` en el proyecto
    - Crear el fichero `clientes` dentro del directorio `clientes`
    - Copiar el breadcrumb de `Dashboard` y adaptarlo a `clientes`
    - Añadir una nueva ruta `clientes/clientes.html`

3. Modificar el menu, añadir Dashboard y Clientes
    - Dashboard : #!/
    - Clientes : #!/clientes

4. Codear las funciones globales en el controlador principal
    - Codear la funcion `activar`

5. Crear el directorio controladores `angular/controladores`
    - Crear el fichero `clientesCtrl.js`
    - Añadir la referencia del nuevo controlador en el index
    - Inyectar el controlador de clientes en `app.js`
    - Añadir en las rutas el `controller` con su valor

    - Crear el fichero `dashboardCtrl.js`
    - Añadir la referencia del nuevo controlador en el index
    - Inyectar el controlador de dashboard en `app.js`
    - Añadir en las rutas el `controller` con su valor

## LISTADO DE CLIENTES PAGINADO

1. Codear la tabla clientes en el fichero `clientes.html`
    - Codear el boton `Agregar Cliente`

2. Crear el servicio `clientes.js`
    - Añadir la referencia del servicio en el `index`
    - Inyectar el servicio en el controlador principal

3. Crear el directorio `php/clientes` (todo lo relacionado con servicios)
    - Crear el fichero `php/clientes/get.clientes.php`

4. Codear el servicio `clientes.js`
    -  Llamar a la funcion `"php/clientes/get.clientes.php`

5. Inyectar el servicio `Clientes` en el controlador `clientesCtrl`

6. Mostrar la información en la vista `clientes.html`

## LISTADO PAGINADO - PARTE 2

1. Añadir el codigo para la paginacion en la vista de clientes
    - Aparezcan todas las paginas
    - El numero de la pagina actual debe estar sombreado

2. Especificar en la ruta (clientes), un parametro más para las páginas
    - /clientes/:pag

3. Añadir una variable `pag` en el controlador `clientesCtrl`

4. Pasar la variable `pag` usando el metodo GET del servicio `Clientes`

5. Pasar como segundo parametro la variable `pag` en el archivo `get.clientes.php`

6. Añadir la funcionalidad utilizando los números

7. No usar href y usar la directiva `ng-click`

## CLIENTES - APARIENCIA

1. Crear el template `modal_cliente.html`

2. Utilizar la directiva `ng-include` para agregar el modal a la vista `cliente.html`

3. Añadir la directiva `ng-click` al boton edicion de la vista `cliente.html`

4. Crear la funcion `mostrarModal` en el controlador del Cliente

~~~
Se agrego la clase `fade` al template modal para que se muestre con estilo
~~~

5. Agregar un form, con todos los campos que se podran editar por cliente en `modal_cliente.html`

6. Utilizar `angular.copy` para copiar llenar los campos del objeto `clienteSel`

## AUTOVALIDACION DE CLIENTES

    Recursos:
        - http://jonsamwell.github.io/angular-auto-validate/

~~~
Configuracion del archivo de validacion
~~~

1. Descarga el proyecto del primer recurso
    - Copiar el fichero `jcs-auto-validate.min.js`
    - Pegar el fichero en el directorio `angular/lib`
    - Añadir la referencia en el index del proyecto
    - Inyectar `jcs-autoValidate` en el modulo principal del proyecto `app.js`

2. Añadir un `name` al formulario de nuestro `modal` Cliente
    - name="frmCliente"

3. El nombre y el correo seran obligatorios
    - required

4. Quitar al formulario la autovalidacion por defecto de HTML5
    - novalidate

5. Setear la Cultura `i18n` para traducir los mensajes a Español
    - Configurar la ruta donde se encontra el archivo con las frases traducidas
    - Configurar el idioma

~~~
Procesamiento de la data
~~~

6. Procesamiento de la Data desde el formulario
    - Añadir la directiva `ng-submit` y setear como valor `guardar(clienteSel)`
    - Enviar como parametro el cliente seleccionado

7. Añadir la funcion `guardar(cliente)` en el controlador `clientesCtrl`
    - Codear la funcion

8. Añadir la funcion `guardar(cliente)` en el servicio `clientes_service`
    - Coder la funcion

9. Añadir el fichero `post.clienteguardar.php` al directorio `php/clientes`
    - Codear la funcion

~~~
Cerrar el Modal despues de Procesar la data
~~~

10. Para cerrar el modal , añadimos en el controlador cliente , funcion `guardar`
    - $("#modal_cliente").modal('hide');

11. Enviar el formulario `frmCliente` a la hora de salvar los cambios
    - ng-submit="guardar(clienteSel, frmCliente)"

## INSERTAR CLIENTE

1.  Añadir al boton `Agregar Cliente` la siguiente opcion
    - ng-click="mostrarModal({})"

2. Codear en el fichero `post.clienteguardar.php` la logica para insertar a base de datos

# LOGIN PARA NUESTRA APLICACIÓN

## LOGIN Y UNOS CONCEPTOS DE SEGURIDAD

    Recursos:
        - usuarios.sql
        - post.verificar.php

1. Ejecutar el script de base de datos en la base de datos `facturacion_db`

2. Crear dos directorios en el proyecto `private` y `public`

3. Copiar todos los ficheros y directorios en el directorio `private`

4. Crear en la raiz del proyecto un fichero llamado `index.html`

5. Crear dentro del fichero `public` un fichero llamado `index.html`

6. Utilizar el `login` de la siguiente ruta: `fac/pages/examples/login.html`

7. Copiar y Pegar el directorio `bootstrap` de `fac` dentro de public

8. Copiar y Pegar el fichero `fac/dist/css/AdminLTE.min.css` dentro de public

9. Modificar las referencias del fichero `index.html` (login)

## LOGIN - PARTE 2

1. Copiar el directorio `fac/angular` en el directorio `public`

2. Añadir la directivas `ng-app` y `ng-controller` al index del `login`

3. Crear el fichero `login_service.js` en el directorio `servicios`

4. Añadir las referencias de los ficheros de angular, controladores y servicios en el `index`

5. Añadir la directiva `ng-submit` con su respectivo valor  
    - ng-submit="ingresar(datos)"

6. Añadir la directiva `ng-model` a usuario y contraseña y las propiedades `required` y `name`

7. Añadir la directiva `ng-disabled` al boton `Ingresar` para bloquearlo si no es valido
    - ng-disabled="forma.$invalid"

8. Codear el controlador principal de login `mainCtrl`
    - Inyectar el servicio `LoginService` en el controlador

## LOGIN - PARTE 3

    Recursos:
        - `post.verificar.php`

1. Crear el directorio `php/login` del directorio `fac` y copiar el fichero `post.verificar.php`

2. Modificar el archivo php `post.verificar.php`, cambiar `password` por `contrasena`

3. Añadir un registro a la tabla `usuarios`

3. Codear el servicio `LoginService`

4. En casa de que el usuario/contrasena sean correctos, el controlador debera redireccionar a la pagina inicial del directorio `fac`
    - window.location = data.url;

5. Cambiar la extension de la vista del login, de .html a .php
    - public/index.php

6. Iniciar la sesion al ingresar a la vista del login
    - session_start();

7. Destruir la variable de sesion `user`
    - unset()

## ENCRIPTANDO LA CONTRASEÑA

1. Descomentar la funcion `encriptar_usuario` y la linea numero 21 del fichero `post.verificar.php`

2. Ingresamos a la siguiente URL para ejecutar la función descomentada
    - http://127.0.0.1:8080/angularjs/AJS-Facturacion/public/

3. Volver a comentar la funcion y la linea 21

4. Descomentar la linea numero 46 para comparar la password que ingresas con la password descriptada de la base de datos

5. Renombrar el fichero `index.html` del directorio `fac` y ponerle `index.php`

6. Codear al inicio del index un mensaje `Acceso Denegado` para evitar el acceso sabiendo la url
    - http://127.0.0.1:8080/angularjs/AJS-Facturacion/fac/#!/

7. Codear el boton `Sing out`
    - <a href="../public/" class="btn btn-default btn-flat">Sign out</a>

# FACTURA

## PREPARANDO EL SIGUIENTE PASO: MAESTRO - DETALLE

1. Descargar el fichero adjunto de la sesión

2. Ejecutar el script de base de datos `facturacion_db.sql`, generara las siguientes tablas:
    - `facturas`
    - `facturas_detalle`
    - `productos`

3. Añadir los siguientes ficheros en sus respectivos directorios:
    - `fac/angular/servicios/factura_service.js`
    - `fac/facturas/facturas.html`
    - `fac/facturas/nueva_factura.html`
    - `fac/php/clases/class.Database.php`
    - `fac/php/facturas/post.guardarfactura.php`
    - `fac/php/productos/get.producto.php`

## MAESTRO DETALLE

1. Añadir los siguientes campos al fichero `configuracion.json`
    - Telefono
    - Dirección
    - ISV

2. Configurar la conexion a la base de datos

## EXPLICANDO LO NUEVO

1. Añadir las nuevas rutas en el fichero `app.js`

2. Loguearse a la aplicacion web y hacer clic en la tarjeta `Nueva Factura`

3. Hacer clic en el boton `Nueva Factura`

4. Buscar por clientes, añadir el nombre `xavier` y hacer clic en `buscar` o `enter`

5. Hacer clic en el `checkbox` para seleccionar el usuario elegido
    - Se generara una factura nueva ( sin información )

6. Ingresar los items por `codigo` y seleccionar la `cantidad`

7. `enterKey` es una directiva personalizada creada en `app.js`
