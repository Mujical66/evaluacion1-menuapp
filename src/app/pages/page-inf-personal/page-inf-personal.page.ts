/* ################################### 
Proyecto: Tarea de Evaluación 1 y 2.
Desarrollador: Luis F. Mujica
Fecha: Mayo 2025
Fecha Act.: 14-Junio-2025
Nombre del código: page-inf-personal.page.ts
Versión: 1.0.0 (Tarea de Evaluación 1)
Versión: 1.1.0 (Tarea de Evaluación 2)
Descripción: Este código permite definir la logica de componentes, servicios, modulos y controladores, 
para el funcionamiento de los archivos de la pagina de Información principal.
#####################################
*/

/* Área de Importaciones necesaria para el funcionamiento del código. */

/* Importación del núcleo de Angular para la creación de componentes. */
import { Component } from '@angular/core';

/* Importación de componentes de Ionic para la estructura de la interfaz de usuario de la barra de menú. */

import {
  /* proporcionan una barra superior con título con sus caracteristicas. */
  IonHeader,
  IonToolbar,
  IonTitle,
  /* define el área de contenido principal. */
  IonContent,
  /* permite la creación de listas interactivas dentro de la UI. */
  IonList,
  IonItem,
  IonLabel,
} from '@ionic/angular/standalone';

/* Importación de iconos de la libreria de Ionicons para la interfaz de usuario. */
import { addIcons } from 'ionicons';

/* Importación del icono Home de la libreria de iconos Ionicons. */
import { home } from 'ionicons/icons';

/* Importación del componente del menú principal de la aplicación. */
import { MenuPrincipalComponent } from '../../components/menu-principal.component';

/* @Component área o sector que define la configuración de los componentes 'page-inf-personal'. */
@Component({
  selector: 'app-page-inf-personal',
  templateUrl: './page-inf-personal.page.html',
  styleUrls: ['./page-inf-personal.page.scss'],
  standalone: true,
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonList,
    IonItem,
    IonLabel,
    MenuPrincipalComponent, // Importa el componente del menú
  ],
})

/* Esta es la clase que representa la página de inicio de la aplicación y puede ser exportada para que pueda ser usada por otros modulos. */
export default class PageInfPersonalPage {
  constructor() {
    addIcons({ home });
  }
}
