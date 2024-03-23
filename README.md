# UNIR-GII-TFG-Portal-Socio
![Cabecera Portal socio](https://github.com/JossTero/UNIR-GII-TFG-Portal-Socio/blob/main/additional/img/header/JAOM_UNIR_GII_TFG_Cebecera_portal_Horizontal.PNG)
 
Desarrollo MERN Stack que implementa un **Portal web para la interacción del socio con la asociación de la que es miembro**.

![Escudo](https://img.shields.io/badge/status-in%20Development-red) ![Escudo](https://img.shields.io/badge/logo-javascript-blue?logo=javascript&logoColor=f5f5f5) <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/">![Escudo](https://img.shields.io/badge/license-in%20CC%20BY--NC--SA%204.0-yellow)</a>

## Tecnologías de desarrollo

### 🌐 MERN Stack
MongoDB, Expressjs, React, Nodejs
> MERN es una implementación fullstack en MongoDB, Expressjs, React, Nodejs.

### Estructura del proyecto
```terminal
LICENSE.MD
README.MD
additional/
   bbdd
   img
server/
   ...
client/
   ...
```
### Prerequisitos
- [MongoDB](https://www.mongodb.com/)
- [Node](https://nodejs.org/en/download/) >=20.6.2
- [npm](https://nodejs.org/en/download/package-manager/)

Tenga en cuenta que necesita que el cliente y el servidor se ejecuten simultáneamente en diferentes sesiones de terminal para que se comuniquen entre sí.

### Uso de la base de datos
Con un software de gestión de BBDD MongoDB como:
- [MongoDB Compass](https://www.mongodb.com/try/download/compass)

1. Crear nueva conexión: *mongodb://localhost:27017*
2. Crear la base de datos: *associations*
3. Crear e importar los datos JSON de cada una de las colecciones (Ficheros en la carpeta "***.\additional\bbdd\collections***"):
    - 3.1. Asociaciones -> *associations*: associations.associations.json
    - 3.2. Junta directiva -> *boardofdirectors*: associations.boardofdirectors.json
    - 3.3. Directivos -> *executives*: associations.executives.json
    - 3.4. Socios -> *partners*: associations.partners.json
    - 3.5. Cuotas -> *membershipfees*: associations.membershipfees.json
    - 3.6. Situaciones de cuotas -> *membershipfeesituations*: associations.membershipfeesituations.json
    - 3.7. Noticias -> *announcements*: associations.announcements.json
    - 3.8. Documentos -> *documents*: associations.documents.json
    - 3.9. Imágenes -> *images*: associations.images.json
    - 3.10. Usuarios -> *users*: associations.users.json
    - 3.11. Audotoría de arranque del servidor -> *auditstarts*: associations.auditstarts.json
    - 3.12. Audotoría de login de usuario -> *auditlogins*: associations.auditlogins.json
    - 3.13. Auditoría de petición al servidor -> *auditrequests*: associations.auditrequests.json
    - .14. Secuencias de la BBDD -> *sequences*: associations.sequences.json

### Uso del lado del cliente (PUERTO: 5173 aunque al arrancar indica el puerto en consola)
Para implementar la parte frontal de la aplicación, se ha utilizado una plantilla de administración en React como base del portal web que ha permitido acelerar el desarrollo. Una parte reducida de la plantilla se ha adaptado a las necesidades concretas del negocio de las asociaciones. Página web de la plantilla: https://themeforest.net/

Plantilla "**Dashra - React Admin Template**" bajo "*Regular license*": https://themeforest.net/item/dashra-react-admin-template/48837630
- ***Texto que explica la "*Regular license*"***: Uso, por parte suya o de un cliente, en un único producto final por el que no se cobra a los usuarios finales. El precio total incluye el precio del artículo y una tarifa del comprador.

```terminal
$ cd .\client\       // Para ir a la carpeta del cliente
$ npm install        // Para instalar las dependencias del cliente
$ npm run dev        // Arrancar el cliente en local
```

### Uso del lado del servidor (PUERTO: 5000 aunque al arrancar indica el puerto en consola)
```terminal
$ cd .\server\       // Para ir a la carpeta del servidor
$ npm install        // Para instalar las dependencias del servidor
$ npm start          // Arrancar el servidor en local
```

### Dependencias
Client-side | Server-side
--- | ---
chart.js: ^4.4.0 | bcryptjs: ^2.4.3
js-cookie: ^3.0.5 | body-parser: ^1.20.2
jsvectormap: ^1.5.3 | cookie-parser: ^1.4.6,
node-fetch: ^3.3.2 | cors: ^2.8.5
node-fetch: ^3.3.2 | express: ^4.18.2
react-chartjs-2: ^5.2.0 | jsonwebtoken: ^9.0.2
react-circular-progressbar: ^2.1.0 | mongoose: ^7.5.2
react-daypicker: ^3.0.10 | multer: ^1.4.5-lts.1
react-dom": ^18.2.0 | nodemon: ^3.0.1
react-hook-form: ^7.48.2 | zod: ^3.22.2
react-router-dom: ^6.18.0 | 

### Descripción

Este repositorio es para la entrega del **TFE** \(**T**rabajo de **F**in de **E**studios\) del Grado en Ingeniería Informática de la **<a href="https://www.unir.net" target="_blank">Universidad Internacional de la Rioja - UNIR</a>**.

Es un desarrollo de un portal web para socios de asociaciones sin ánimo de lucro que permite al socio consultar la información que publica la asociación de la que sea miembro (Información de realización de asambleas, actas, eventos, noticias de interés, cuotas de socio, documentación, información de la asociación y de la junta, etc.), además de poder tramitar el pago de una cuota anexando el justificante de pago.

Este proyecto pretende dar solución a asociaciones sin ánimo de lucro que no disponen de la funcionalidad de portal del socio que le permita al socio interactuar con la asociación, siendo una información privada para los socios de la asociación ya que se accede mediante identificación (Que tendrá el usuario por ser socio de la asociación).

Este sistema se puede utilizar de forma completa, tanto el cliente (front-end), el servidor (back-end) y la base de datos integrándose o alimentado al sistema la información desde la aplicación de gestión de la asociación o también se puede utilizar el frontal del cliente e integrarse a los endpoints del sistema de gestión de la asociación adaptados a este frontal.

![Layout](https://github.com/JossTero/UNIR-GII-TFG-Portal-Socio/blob/main/additional/img/portal/07_JAOM_UNIR_GII_TFG_Portal_del_socio_Asociaci%C3%B3n_de_estudiantes_de_la_UNIR_Acciones_del_socio.PNG)

## Presentación del portal web

**La URL depende de la asociación a la que se quiera acceder y que se haya dado de alta previamente en el sistema.**

**Los datos cargados en las colecciones del modelo de datos de la asociación son un ejemplo de una asociación de estudiantes de la UNIR, con código de asociación "asoc-estudiantes-unir" que es la parte que identifica a la asociación en la url, siendo esta parte de la url dinámica por la asociación a la que se quiera acceder.** **Si por ejemplo se carga otra asociación con código "asoc-amigos-mus" para acceder al login y su contenido será con la url **"http://localhost:5173/asoc-amigos-mus/login"** saliendo su propio logo dentro del login y del portal, si se ha cargado y su propia información.**

**Hay que tener en cuenta que cada asociación tiene sus socios y usuarios, por lo que para acceder a otra asociación distinta se tendrá que crear toda la información de la asociación, socios, noticias, cuotas, etc. Al ser un entorno de demo, la forma actual de hacerlo es por una herramienta como el Postman que permite mandar consumir los endpoints expuestos de la parte del servidor para cargar la información. Otra forma es dar de alta a mano la información directamente en la base de datos. Esto en un entorno productivo habrá distintas formas de cargar la información, consumiendo los endpoints por la aplicación de la gestión por ejemplo.**

El socio visita la página de login "http://localhost:5173/asoc-estudiantes-unir/login":

- ***Usuario***: joseenrique.ayala@estudiantes-unir.es
- ***contraseña***: prueba123456
![Login](https://github.com/JossTero/UNIR-GII-TFG-Portal-Socio/blob/main/additional/img/portal/01_JAOM_UNIR_GII_TFG_Portal_del_socio_Asociaci%C3%B3n_de_estudiantes_de_la_UNIR_Login.PNG)

El socio accede a su perfil de socio, entrando en la sección de noticias, mostrando las 2 últimas noticias por la paginación por defecto, pero se puede ampliar el tamaño de página y navegar entre páginas.
![Perfil del socio - Noticias](https://github.com/JossTero/UNIR-GII-TFG-Portal-Socio/blob/main/additional/img/portal/02_JAOM_UNIR_GII_TFG_Portal_del_socio_Asociaci%C3%B3n_de_estudiantes_de_la_UNIR_Perfil_del_socio_Noticias.PNG)

El socio accede la sección de cuotas, donde puede consultar en orden descendente el estado de las cuotas y aquella que estén en pendiente de cobro, puede anexar el justificante de pago para que la asociación verifique el pago de la cuota. El sistema muestra las 4 últimas cuotas por la paginación por defecto, pero se puede ampliar el tamaño de página y navegar entre páginas.
![Perfil del socio - Cuotas](https://github.com/JossTero/UNIR-GII-TFG-Portal-Socio/blob/main/additional/img/portal/03_JAOM_UNIR_GII_TFG_Portal_del_socio_Asociaci%C3%B3n_de_estudiantes_de_la_UNIR_Perfil_del_socio_Cuotas.PNG)

El socio pulsa la acción de anexar en una cuota para adjuntar el justificante de pago.
![Perfil del socio - Cuotas - Anexar justificante de pago](https://github.com/JossTero/UNIR-GII-TFG-Portal-Socio/blob/main/additional/img/portal/04_JAOM_UNIR_GII_TFG_Portal_del_socio_Asociaci%C3%B3n_de_estudiantes_de_la_UNIR_Perfil_del_socio_Cuotas_Anexar_justificante_de_pago.PNG)

El socio accede la sección de documentos, donde puede consultar en orden descendente los documentos de distintas categorías. El sistema muestra los 4 últimas documentos por la paginación por defecto, pero se puede ampliar el tamaño de página y navegar entre páginas.
![Perfil del socio - Documentos](https://github.com/JossTero/UNIR-GII-TFG-Portal-Socio/blob/main/additional/img/portal/05_JAOM_UNIR_GII_TFG_Portal_del_socio_Asociaci%C3%B3n_de_estudiantes_de_la_UNIR_Perfil_del_socio_Documentos.PNG)

El socio accede a la información de la asociación, consultando tanto la información de la asociación como de la junta directiva actual.
![Asociación](https://github.com/JossTero/UNIR-GII-TFG-Portal-Socio/blob/main/additional/img/portal/06_JAOM_UNIR_GII_TFG_Portal_del_socio_Asociaci%C3%B3n_de_estudiantes_de_la_UNIR_Asociaci%C3%B3n_Junta_directiva.PNG)

Vista completa del portal (Con cabecera y pie).
![Vista completa](https://github.com/JossTero/UNIR-GII-TFG-Portal-Socio/blob/main/additional/img/portal/08_JAOM_UNIR_GII_TFG_Portal_del_socio_Asociaci%C3%B3n_de_estudiantes_de_la_UNIR_Vista_completa.PNG)

### Licenciamiento

![Licencia](https://github.com/JossTero/UNIR-GII-TFG-Portal-Socio/blob/main/additional/img/license/licencias-creative-commons-04.png)

