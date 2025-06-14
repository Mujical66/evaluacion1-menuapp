/* ################################### 
Proyecto: Tarea de Evaluación 1 y 2.
Desarrollador: Luis F. Mujica
Fecha: Mayo 2025
Nombre del código: main.ts
Versión: 1.0.0 (Tarea de Evaluación 1)
Versión Act.: 1.1.0 (Tarea de Evaluación 2)
Descripción: Archivo principal para la ejecución de la app, es el punto de entrada y es el primer archivo que se ejecuta.
#####################################
*/

/* Área principal de las Importaciones necesaria o requeridas para el funcionamiento de la app. */

/*Importación de la función "bootstrapApplication" desde el módulo. */
import { bootstrapApplication } from '@angular/platform-browser';

/* Importación de la función para configurar el sistema de enrutamiento de la aplicación. (StandAlone) */
import { provideRouter } from '@angular/router';

/* Importación de la función de las rutas definidas en la aplicación en el formato StandAlone. */
import { provideIonicAngular } from '@ionic/angular/standalone';

/* Importación de las rutas de la aplicación desde el archivo: app.routes donde fueron definidas todas rutas a utilizar en la app. */
import { routes } from './app/app.routes';

/* Importación del componente principal de la aplicación. */
import { AppComponent } from './app/app.component';

/* Importación de los estilos globales de la aplicación. */
bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes), provideIonicAngular({})],
}).catch((err) => console.error(err));
