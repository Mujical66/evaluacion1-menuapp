/* ################################### 
Proyecto: Tarea de Evaluación 1 y 2.
Desarrollador: Luis F. Mujica
Fecha: Mayo 2025
Fecha Act.: 13-Junio-2025 
Nombre del código: tab-inicial.page.ts
Versión: 1.0.0 (Tarea de Evaluación 1)
Versión Act.: 1.1.0 (Tarea de Evaluación 2)
Descripción: Desarrollo de la logica de la estructura del menu de TABS.
#####################################
*/

/* Area de importación de los elementos y dependencias a utilizar en los tabs.  */
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonTab,
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonIcon,
  IonLabel,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {
  library,
  playCircle,
  radio,
  search,
  home,
  person,
  mail,
} from 'ionicons/icons';

/* Area de configuración de los componetes y la estructura que se aplicará */
@Component({
  selector: 'app-tab-inicial',
  templateUrl: './tab-inicial.page.html',
  styleUrls: ['./tab-inicial.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    IonTab,
    IonTabBar,
    IonTabButton,
    IonTabs,
    IonIcon,
    IonLabel,
  ],
})

/* Area de exportación de las clase para ser utilizada en cual otro elemento de la App */
export class TabInicialPage implements OnInit {
  constructor() {
    addIcons({ home, person, mail, library, playCircle, radio, search });
  }

  ngOnInit() {}
}
