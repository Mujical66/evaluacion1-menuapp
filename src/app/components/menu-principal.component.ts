/* ################################### 
Proyecto: Tarea de Evaluación 1 y 2.
Desarrollador: Luis F. Mujica
Fecha: Mayo 2025
Fecha Act.: 14-Junio-2025
Nombre del código: menu-principal.component.ts
Versión: 1.0.0 (Tarea de Evaluación 1)
Versión: 1.1.0 (Tarea de Evaluación 2)
Descripción: Este código permite definir la logica de componentes, servicios, modulos y controladores, 
para el funcionamiento de los archivos de la barra del Menú Principal.
#####################################
*/

/* Área de importación de los componentes, servicios o modulo requeridos */
import { Component, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Location } from '@angular/common';
import { MenuController } from '@ionic/angular';
import {
  IonToolbar,
  IonButtons,
  IonButton,
  IonTitle,
  IonImg,
  IonMenu,
  IonMenuButton,
  IonHeader,
  IonContent,
  IonList,
  IonItem,
  IonIcon,
  IonLabel,
} from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';

// Area de la configuración de los componentes del formulario o pagina
@Component({
  selector: 'app-menu-principal',
  templateUrl: './menu-principal.component.html',
  styleUrls: ['./menu-principal.component.scss'],
  standalone: true,
  imports: [
    IonToolbar,
    IonButtons,
    IonButton,
    IonTitle,
    IonImg,
    IonMenu,
    IonMenuButton,
    IonHeader,
    IonContent,
    IonList,
    IonItem,
    IonIcon,
    IonLabel,
    RouterLink,
  ],
})

// Area de exportación de los componetes que pueden ser utilizados por otros areas del proyecto
export class MenuPrincipalComponent {
  constructor(
    @Inject(DOCUMENT) private document: Document,
    private location: Location,
    private menuCtrl: MenuController
  ) {}

  isActive(path: string): boolean {
    return this.location.path() === path;
  }

  async closeMenu() {
    await this.menuCtrl.close('main-menu');
  }
}
