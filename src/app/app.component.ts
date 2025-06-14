/* ################################### 
Proyecto: Tarea de Evaluación 1 y 2.
Desarrollador: Luis F. Mujica
Fecha: Mayo 2025
Fecha Act.: 13-Junio-2025
Nombre del código: app.component.ts
Versión: 1.0.0 (Tarea de Evaluación 1)
Versión: 1.1.0 (Tarea de Evaluación 2)
Descripción: Archivo principal para definir todas los componetes generales de la aplicación o app.
#####################################
*/

/* Área principal de las Importaciones necesaria o requeridas para el funcionamiento de la app. */
import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';

/* Área para definir y exportar el componente principal de la aplicación. */
@Component({
  selector: 'app-root',
  template: `
    <ion-app>
      <ion-router-outlet></ion-router-outlet>
    </ion-app>
  `,
  standalone: true,
  imports: [IonApp, IonRouterOutlet],
})

/* Clase principal de la aplicación que define el componente raíz. */
export class AppComponent {}
